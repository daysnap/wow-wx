
import type { IPageOptions, IWow } from './interface'

const { wow$ } = getApp()
const Core = wow$.Core

export default class WowPage extends Core {

  constructor(options: IPageOptions) {
    super()
    const { __mixins, __constant } = wow$ as IWow
    if (!options.mixins) {
      options.mixins = []
    }
    options.mixins!!.unshift(...__mixins)
    options = this.parseOptions(options, __constant.FUNCTION_PAGE_HOOKS)
    Page(options)
  }

  static get wow$(): IWow {
    return wow$
  }

}
