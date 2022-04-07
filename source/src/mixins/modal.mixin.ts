
import { IPlugin } from '../interface'
import { promisify } from './promisify.mixin'

export interface IOptions {
  exclude: (err: any) => boolean
}

export const defaultOptions: IOptions = {
  exclude: (err) => !err || ['', 'cancel'].includes(err),
}

export function modalToast (options: WechatMiniprogram.ShowToastOption | string) {
  if (typeof options === 'string') {
    options = { title: options }
  }
  const { exclude } = defaultOptions
  if (exclude(options.title)) return
  options = Object.assign({ duration: 3000, mask: true }, options)
  return promisify<WechatMiniprogram.ShowToastOption, WechatMiniprogram.ShowToastSuccessCallback>(wx.showToast)(options)
}

export function modalConfirm (options: WechatMiniprogram.ShowModalOption | string) {
  if (typeof options === 'string') {
    options = { title: '', content: options }
  }
  return promisify<WechatMiniprogram.ShowModalOption, WechatMiniprogram.ShowModalSuccessCallback>(wx.showModal)(options)
}

export function modalActionSheet (options: WechatMiniprogram.ShowActionSheetOption | string[]) {
  if (Object.prototype.toString.call(options) === '[object Array]') {
    options = { itemList: options as string [] }
  }
  return promisify<WechatMiniprogram.ShowActionSheetOption, WechatMiniprogram.ShowActionSheetSuccessCallback>(wx.showActionSheet)(options as any)
}

const modal = {
  modalToast,
  modalConfirm,
  modalActionSheet,
}

const Modal: IPlugin<IOptions> = {
  install (Wow, options) {
    Object.assign(defaultOptions, options)
    Wow.mixins.Modal = modal
  },
}

export default Modal
