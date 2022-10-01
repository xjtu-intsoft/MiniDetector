var t, e = require("../../../@babel/runtime/helpers/interopRequireDefault"), a = e(require("../../../@babel/runtime/helpers/defineProperty")), r = e(require("../../../4F4638B00691379C292050B78222E9B3.js"));

function o(t, e) {
    var a = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), a.push.apply(a, r);
    }
    return a;
}

new (require("../../../AFC697330691379CC9A0FF345133E9B3.js").wxRequest)(), require("../../../7931C4950691379C1F57AC929AD2E9B3.js");

var i = require("../../../C7FFDFA40691379CA199B7A32840E9B3.js"), n = require("../../../BED2A6710691379CD8B4CE768250E9B3.js"), s = getApp();

(0, r.default)({
    options: {
        addGlobalClass: !0
    },
    behaviors: [ i, n ],
    properties: {
        dropList: Object,
        pageFlag: String
    },
    data: (t = {
        cbData: null,
        initData: null,
        formShow: null,
        isUseWechatLogo: null,
        customVfailArray: null,
        systemInfo: s.systemInfo,
        isShowSetting: !1,
        settings: null,
        currentType: null,
        showZhidingyi: null
    }, (0, a.default)(t, "customVfailArray", null), (0, a.default)(t, "webCustomVfailArray", null), 
    (0, a.default)(t, "webCustomVNullArray", null), (0, a.default)(t, "addItem", {
        d: {
            name: null,
            val: null,
            isShow: null
        },
        panelShow: null,
        cValueFail: null
    }), (0, a.default)(t, "itemList", null), (0, a.default)(t, "customName", null), 
    (0, a.default)(t, "autoFocusType", null), (0, a.default)(t, "confirming", null), 
    t),
    ready: function() {
        var t = this;
        s.callWebdata = function() {
            var e = t.store.data.initData.formData.form, a = t.store.data.itemList, r = t.store.data.cbData, o = t.store.data.cbData.showconfig && t.store.data.cbData.showconfig.configShow || {};
            (r.fax || o.fax) && (a = [ "网址", "自定义" ]), (r.website || o.website) && (a = [ "传真", "自定义" ]), 
            (r.website || o.website && r.fax || o.fax) && (a = [ "自定义" ]), r.showconfig.custom && r.showconfig.custom.length >= 5 && a.splice(a.indexOf("自定义"), 1), 
            a.length || (t.store.data.showZhidingyi = !1), t._getCustomName(t), t.firstAddStatus(e), 
            t.store.data.itemList = a, t.update();
        };
    },
    methods: {
        updateCard: function() {
            this.triggerEvent("updateCard", !0);
        },
        _updateCard: function() {
            this.triggerEvent("updateCard", !0);
        },
        baseLogoUpld: function() {
            this.store.data.hasUpdateForm = !0, this.update(), wx.chooseImage({
                count: 1,
                sizeType: [ "compressed" ],
                success: function(t) {
                    wx.navigateTo({
                        url: "../../cardMain/upldTbcardLogoNew/upldTbcardLogo?id=0&imgurl=" + t.tempFilePaths[0] + "&backcolor=white&main=cardmainEdit"
                    });
                }
            });
        },
        focus: function(t) {
            (function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? o(Object(r), !0).forEach(function(e) {
                        (0, a.default)(t, e, r[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                    });
                }
                return t;
            })({}, t.currentTarget.dataset).id;
        },
        showNoEdit: function() {
            var t = this.store.data.defCard.isAdministrator;
            console.log(t), t ? this.triggerEvent("showDialog", {
                name: "showAdmin",
                val: !0
            }) : this.triggerEvent("showDialog", {
                name: "showMember",
                val: !0
            });
        },
        checkForm: function() {
            for (var t = this.store.data.initData.formData.form, e = 0; e < t.length; e++) t[e][4] = t[e][2] && t[e][2].trim().length ? 3 : 2;
            this.update();
        },
        compsData: function(t, e) {
            e = t.length;
            for (var a = [], r = (t = t, 0); r < e; r++) t[r][2] && "custom" != t[r][0] && a.push(t[r][2]);
            return a;
        },
        focusCustom: function(t) {},
        sensorGetphonenumber: function() {
            s.burying.setPoint(s, 123);
        },
        addStatus: function(t, e) {
            function a(t, e) {
                e.forEach(function(a, r) {
                    a[0] == t && (e[r + 1][7].add ? e[r + 2][7].add || (e[r + 2][7].add = !0) : e[r + 1][7].add = !0, 
                    e[r + 1][7].add && e[r + 2][7].add && (a[7].add = !1), e[r + 1][7].add || e[r + 2][7].add || (a[7].add = !0));
                });
            }
            switch (t) {
              case "mophone1":
              case "wechat":
              case "addr1":
              case "email1":
              case "phone1":
                a(t, e);
            }
        },
        blur: function(t) {
            var e = this, a = t.currentTarget.dataset.type;
            this.store.data.cbData[a] = t.detail.value && t.detail.value.trim() && a ? t.detail.value : "", 
            this.store.formDataGet(), this.update().then(function(t) {
                Object.keys(t).length && (e.store.data.hasUpdateForm = !0);
            });
        },
        _dropFunc: function(t) {
            t.currentTarget.dataset.type;
            this.triggerEvent("dropFunc", t);
        },
        _showCompanyTipFunc: function(t) {
            var e = t.currentTarget.dataset.tip;
            this.selectComponent("#" + e).showTip();
        }
    }
});