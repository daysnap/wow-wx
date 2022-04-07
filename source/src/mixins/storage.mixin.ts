
import { IPlugin } from '../interface'
import { promisify } from './promisify.mixin'

export function storageSet<T> (key: string, data: T) {
  return promisify<WechatMiniprogram.SetStorageOption, T>(wx.setStorage)({ key, data })
}

export function storageGet<T> (key: string) {
  return promisify<WechatMiniprogram.GetStorageOption, T>(wx.getStorage)({ key })
}

export function storageRemove (key: string) {
  return promisify<WechatMiniprogram.RemoveStorageOption, WechatMiniprogram.RemoveStorageSuccessCallback>(wx.removeStorage)({ key })
}

export function storageClear () {
  return promisify<WechatMiniprogram.ClearStorageOption, WechatMiniprogram.ClearStorageSuccessCallback>(wx.clearStorage)()
}

export const storage = {
  storageSet,
  storageGet,
  storageRemove,
  storageClear,
}

const Storage: IPlugin<any> = {
  install (Wow) {
    Wow.mixins.Storage = storage
  }
}

export default Storage
