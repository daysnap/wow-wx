/// <reference path="../../typings/index.d.ts" />

export interface AnyOne { [key: string]: any }

export interface Options extends AnyOne {
  mixins?: Options,
  data?: AnyOne
}

export type AppOptions =
  Options
  & WechatMiniprogram.App.Options<WechatMiniprogram.IAnyObject>

export type PageOptions =
  Options
  & WechatMiniprogram.Page.Options<WechatMiniprogram.Page.DataOption, WechatMiniprogram.Page.CustomOption>

export type ComponentOptions =
  Options
  & WechatMiniprogram.Component.Options<WechatMiniprogram.Component.DataOption, WechatMiniprogram.Component.PropertyOption, WechatMiniprogram.Component.MethodOption, {}, false>
