
import { IPlugin } from '../interface'
import { promisify } from './promisify.mixin'

export function settingGet (options?: WechatMiniprogram.GetSettingOption | boolean) {
  if (typeof options === 'boolean') {
    options = { withSubscriptions: options }
  }
  return promisify<WechatMiniprogram.GetSettingOption, WechatMiniprogram.GetSettingSuccessCallback>(wx.getSetting)(options)
}

export function settingOpen (options?: WechatMiniprogram.OpenSettingOption | boolean) {
  if (typeof options === 'boolean') {
    options = { withSubscriptions: options }
  }
  return promisify<WechatMiniprogram.OpenSettingOption, WechatMiniprogram.OpenSettingSuccessCallback>(wx.openSetting)(options)
}

const setting = {
  settingGet,
  settingOpen,
}

export const Setting: IPlugin<any> = {
  install (Wow) {
    Wow.mixins.Setting = setting
  }
}
