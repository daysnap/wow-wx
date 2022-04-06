
import type { IComponentOptions, IWow } from './interface'

const { wow$ } = getApp()
const Core = wow$.Core

export default class WowComponent extends Core {

  constructor(options: IComponentOptions) {
    super()
    if (options.mixins) {
      options.mixins = []
    }
    const { __mixins, __constant } = wow$ as IWow
    options.mixins?.unshift(...__mixins)
    options = this.parseOptions(options, __constant.FUNCTION_COMPONENT_HOOKS, true)
    Component(options)
  }

  static get wow$(): IWow {
    return wow$
  }

}
