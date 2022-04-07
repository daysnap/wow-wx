/// <reference path="../../typings/index.d.ts" />

export interface IAnyOne { [key: string]: any }

export interface IOptions extends IAnyOne {
  mixins?: IOptions[],
  data?: IAnyOne
}

export type IAppOptions =
  IOptions
  & WechatMiniprogram.App.Options<WechatMiniprogram.IAnyObject>

export type IPageOptions =
  IOptions
  & WechatMiniprogram.Page.Options<WechatMiniprogram.Page.DataOption, WechatMiniprogram.Page.CustomOption>

export type IComponentOptions =
  IOptions
  & WechatMiniprogram.Component.Options<WechatMiniprogram.Component.DataOption, WechatMiniprogram.Component.PropertyOption, WechatMiniprogram.Component.MethodOption, {}, false>

export type IWow = {
  __mixins: IAnyOne [],
  __constant: IAnyOne,
  mixins: IAnyOne
} & IAnyOne

export type IPluginFunction<T> = (Wow: IWow, options?: T) => void

export interface IPlugin<T> {
  install: IPluginFunction<T>
  [key: string]: any
}
