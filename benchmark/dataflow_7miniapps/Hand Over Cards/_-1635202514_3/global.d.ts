type NetworkType = {
  networkType: string
}

interface WxJsEngine {
  kv(id: number, data: string): void
  idkey(id: number, key: number, value: number): void
  idkeyList(list: string): void
  userAgent(): string
  getNetWorkType(): NetworkType
  getPlatform(): string
  getLogLevel(): number
  reportCgi(businessId: string, reqJson: string, callbackId: string): void
  dump(tag: string, data: string): void
}

interface WxJsEngineClient {
  getBasePkgVersion(): number
  getBizPkgVersion(): number
  invoke(func: string, message: string, callbackId: string): void
  cgi(
    cmdId: number,
    cgiUrl: string,
    reqProtoBuf: string,
    callbackId: string
  ): void
  commonCgi(data: string, callbackId: string): void
  setLocalData(key: string, data: string): void
  getLocalData(key: string): string | null
}

interface WxPrefetcherClient {
  getId(): string
  getUserHash(): number
}

interface WxAdClient {
  getInfo(key: string): any
  replaceAdData(data: string): void
}

interface WxVideoPrefetcher {
  cacheVideo(videos: string): void
  getVideoUrlFromMpUrlComplete(data: { [k: string]: any }): void
}

interface WxJsGlobal {
  wxAd: WxAdClient
  wxJsEngineClient: WxJsEngineClient
  wxVideoPrefetcher: WxVideoPrefetcher
  wxPrefetcherClient: WxPrefetcherClient
}
