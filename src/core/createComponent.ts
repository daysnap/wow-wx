
import type { PageOptions } from '../interface'

const { __parseOptions: parseOptions, __mixins: mixins = [] } = getApp().wow$

const createComponent = (options: PageOptions) => {
  if (!options.mixins) {
    options.mixins = []
  }
  options.mixins.unshift(...mixins)
  options = parseOptions(options, true)
  return Component(options)
}

export default createComponent
