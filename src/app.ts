
import * as __constant from './utils/constant'
import type { IAppOptions, IWow, IPlugin } from './interface'
import Core from './core'

export default class WowApp extends Core {

  constructor(options: IAppOptions) {
    super()
    const { mixins: __mixins = [], ...rest } = options
    WowApp.wow$.__mixins = __mixins
    App({ ...rest, wow$: WowApp.wow$ })
  }

  static get wow$(): IWow {
    return { mixins: {}, Core, __mixins: [], __constant }
  }

  static use (plugin: IPlugin) {
    plugin.install?.(WowApp.wow$)
  }

}

