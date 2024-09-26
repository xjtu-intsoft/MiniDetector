
class CrossFieldDataList {
    constructor() {
        this.VarList = [];
        this.undefinedVarList = [];
    }

    addVar(var_entity) {
        if (!this.existVar(var_entity))
            this.VarList.push({
                id: var_entity.node.id,
                var_entity: var_entity,
                read: [], //本var的assign to Dep
                // {
                //     var_entity,
                //     flow
                // }
                write: [] //别的var的assign to Dep，且只关注source相关var
            });
    }
    addPostDefinedVar(postDefinedVar) {
        if (!this.existPostDefinedVar(postDefinedVar.name)) {
            this.undefinedVarList.push({
                name: postDefinedVar.name,
                props: {}
            })
        }
    }
    addPostDefinedProp(shadow) {
        let topLevelObjVar = shadow.toTopLevelObjVar();
        let postDefinedVarRes = this.undefinedVarList.find(e => e.name == topLevelObjVar.name);
        if (postDefinedVarRes) {
            let propName = shadow.getFullName().replace(topLevelObjVar.name, "");
            postDefinedVarRes.props[propName] || (postDefinedVarRes.props[propName] = { read: [], write: [] });
        }
    }

    existVar(var_entity) {
        return this.VarList.some(e => e.id == var_entity.node.id);
    }

    existPostDefinedVar(name) {
        return this.undefinedVarList.some(e => e.name == name);
    }

    addReadOf(var_entity, readInfo) {
        let res = this.VarList.find(e => e.id == var_entity.node.id);
        if (res) {
            res.read.push(readInfo);
        }
    }

    addReadOfPostDefined(shadow, readInfo) {
        let topLevelObjVar = shadow.toTopLevelObjVar();
        let postDefinedVarRes = this.undefinedVarList.find(e => e.name == topLevelObjVar.name);
        if (postDefinedVarRes) {
            let propName = shadow.getFullName().replace(topLevelObjVar.name, "");
            if (postDefinedVarRes.props[propName]) {
                postDefinedVarRes.props[propName].read.push({
                    shadow: shadow,
                    readInfo: readInfo
                });
            }
        }
    }

    addWriteOf(var_entity, writeInfo) {
        let res = this.VarList.find(e => e.id == var_entity.node.id);
        if (res) {
            res.write.push(writeInfo);
        }
    }

    addWriteOfPostDefined(shadow, writeInfo) {
        let topLevelObjVar = shadow.toTopLevelObjVar();
        let postDefinedVarRes = this.undefinedVarList.find(e => e.name == topLevelObjVar.name);
        if (postDefinedVarRes) {
            let propName = shadow.getFullName().replace(topLevelObjVar.name, "");
            postDefinedVarRes.props[propName] && postDefinedVarRes.props[propName].write.push({
                shadow: shadow,
                writeInfo: writeInfo
            });
        }
    }

    addReadForFile(readRes) {
        readRes.forEach(e => {
            e.thisVar.forEach(thisVar => {
                this.addVar(thisVar);
                this.addReadOf(thisVar, { leftVar: e.thatVar, flow: e.flow });
            });
        })
    }

    addWriteForFile(writeRes) {
        writeRes.forEach(e => {
            e.thatVar.forEach(thatVar => {
                this.addVar(thatVar);
                this.addWriteOf(thatVar, { rightVar: e.thisVar, flow: e.flow });
            });
        })
    }

    dealApp(dataLists) {
        for (let dataList of dataLists) {
            for (let varAccess of dataList.VarList) {
                // 实际var被访问时的代理var
                let shadow = varAccess.var_entity;
                let realVar = shadow.refs[0];
                if (realVar) {
                    this.addVar(realVar);
                    this.addReadOf(realVar, {
                        shadow: shadow,
                        read: varAccess.read
                    });
                    this.addWriteOf(realVar, {
                        shadow: shadow,
                        write: varAccess.write
                    });
                }
                // 实际变量未定义的属性
                else {
                    let topLevelObjVar = shadow.toTopLevelObjVar();
                    this.addPostDefinedVar(topLevelObjVar);
                    this.addPostDefinedProp(shadow);
                    this.addReadOfPostDefined(shadow, varAccess.read);
                    this.addWriteOfPostDefined(shadow, varAccess.write);
                }
            }
        }
    }

    outputFileDataList() {
        return this.VarList.map(varAccess => {
            return {
                varInfo: varAccess.var_entity.toJson(),
                readAccess: varAccess.read.map(read => {
                    return {
                        leftVar: read.leftVar.map(e => e.toJson()),
                        readFlow: read.flow.map(dep => dep.toNormalOutput())
                    };
                }),
                writeAccess: varAccess.write.map(write => {
                    return {
                        rightVar: write.rightVar.map(e => e.toJson()),
                        writeFlow: write.flow.map(dep => dep.toNormalOutput())
                    };
                })
            }
        })
    }

    outputAppDataList() {
        return {
            definedData: this.VarList.map(varAccess => {
                return {
                    trueData: varAccess.var_entity.toJson(),
                    readShadows: varAccess.read.map(readOfShadow => {
                        return {
                            shadowVar: readOfShadow.shadow.toJson(),
                            readAccess: readOfShadow.read.map(read => {
                                return {
                                    leftVar: read.leftVar.map(e => e.toJson()),
                                    readFlow: read.flow.map(dep => dep.toNormalOutput())
                                }
                            })
                        };
                    }),
                    writeShadows: varAccess.write.map(writeOfShadow => {
                        return {
                            shadowVar: writeOfShadow.shadow.toJson(),
                            writeAccess: writeOfShadow.write.map(write => {
                                return {
                                    rightVar: write.rightVar.map(e => e.toJson()),
                                    writeFlow: write.flow.map(dep => dep.toNormalOutput())
                                }
                            })
                        };
                    })
                }
            }),
            dynamicDefinedData: this.undefinedVarList.map(dynamicDeclaration => {
                return {
                    shadowObjectVar: dynamicDeclaration.name,
                    dynamicDefinedProps: Object.keys(dynamicDeclaration.props).map(propName => {
                        return {
                            propName: propName,
                            readShadows: dynamicDeclaration.props[propName].read.map(readOfShadow => {
                                return {
                                    shadowVar: readOfShadow.shadow.toJson(),
                                    readAccess: readOfShadow.readInfo.map(read => {
                                        return {
                                            leftVar: read.leftVar.map(e => e.toJson()),
                                            readFlow: read.flow.map(dep => dep.toNormalOutput())
                                        }
                                    })
                                }
                            }),
                            writeShadows: dynamicDeclaration.props[propName].write.map(writeOfShadow => {
                                return {
                                    shadowVar: writeOfShadow.shadow.toJson(),
                                    writeAccess: writeOfShadow.writeInfo.map(write => {
                                        return {
                                            rightVar: write.rightVar.map(e => e.toJson()),
                                            writeFlow: write.flow.map(dep => dep.toNormalOutput())
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    }
}


module.exports = {
    CrossFieldDataList
}