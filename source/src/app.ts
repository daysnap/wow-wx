
import * as __constant from './utils/constant'
import type { IAppOptions, IWow, IPlugin } from './interface'
import Core from './core'
import './extend/promise'

export default class WowApp extends Core {

  constructor(options: IAppOptions) {
    super()
    const { mixins: __mixins = [], ...rest } = options
    WowApp.wow$.__mixins = __mixins
    App({ ...rest, wow$: WowApp.wow$ })
  }

  static wow$: IWow = { mixins: {}, Core, __mixins: [], __constant }

  static use<T> (plugin: IPlugin<T>, options: T) {
    const { install } = plugin
    if (install) {
      install(WowApp.wow$, options)
    }
  }

}

