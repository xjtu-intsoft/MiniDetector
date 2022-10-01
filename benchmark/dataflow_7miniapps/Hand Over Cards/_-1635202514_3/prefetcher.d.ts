import { default as protobuf_2 } from 'protobufjs/minimal';

declare interface callbackWrapper_2 {
    (callback: (...args: any[]) => void): string;
}

declare const _default: Readonly<{
    on: (type: string, callback: any) => void;
    off: (type: string, callback: any) => void;
    config<T>(config: T): void;
    useAPI<T_1 extends string>(apiName: T_1): UseReturn<T_1>;
    utils: {
        pbDecode: (root: protobuf_2.Root, packageName: string, info: string) => {
            [k: string]: any;
        };
        pbEncode: (root: protobuf_2.Root, packageName: string, data: any) => string;
    };
}>;
export default _default;

declare class DefaultHelper<T> {
    default: (args: T) => T;
}

declare interface EventListener_2 {
    on(type: string, callback: any): void;
    off(type: string, callback: any): void;
}

declare type Filter = typeof filter;

declare const filter: {
    wxJsEngine: (api: Native) => Readonly<{
        kv(id: number, data: string): void;
        idkey(id: number, key: number, value: number): void;
        idkeyList(list: string): void;
        userAgent(): string;
        getNetWorkType(): NetworkType;
        getPlatform(): string;
        getLogLevel(): number;
        reportCgi: ((businessId: string, reqJson: string, callbackId: string) => void) & (<T>(args: {
            businessId: string;
            request: T;
        }, callback: (res: any) => void) => void);
        dump(tag: string, data: string): void;
    }>;
    wxJsEngineClient: (api: WxJsEngineClient) => {
        protoCgi<T_1>({ root, cmd, url, reqPackageName, resPackageName, data }: IProtoCgiReq<T_1>, callback: <T_2>(data: T_2) => void): void;
        getBasePkgVersion(): number;
        getBizPkgVersion(): number;
        invoke(func: string, message: string, callbackId: string): void;
        cgi(cmdId: number, cgiUrl: string, reqProtoBuf: string, callbackId: string): void;
        commonCgi(data: string, callbackId: string): void;
        setLocalData(key: string, data: string): void;
        getLocalData(key: string): string | null;
    };
    default: <T_3>(api: T_3) => T_3;
};

declare interface IProtoCgiReq<T> {
    root: protobuf_2.Root;
    cmd: number;
    url: string;
    reqPackageName: string;
    resPackageName: string;
    data: T;
}

declare type Native = WxJsEngine & {
    getEventListener(clientId: string): EventListener_2;
    reportCgi<T>(args: {
        businessId: string;
        request: T;
    }, callback: (res: any) => void): void;
    extend<T>(clientId: string, name: string, func: T): void;
    callbackWrapper: callbackWrapper_2;
};

declare type UseReturn<T> = T extends Exclude<keyof Filter, 'default'> ? ReturnType<Filter[T]> : T extends keyof WxJsGlobal ? ReturnType<DefaultHelper<WxJsGlobal[T]>['default']> : unknown;

export { }
