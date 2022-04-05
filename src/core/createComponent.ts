
import type { PageOptions } from '../interface'

const createComponent = (options: PageOptions) => {
  const { __parseOptions: parseOptions, __mixins: mixins = [], __constant } = getApp().wow$
  if (!options.mixins) {
    options.mixins = []
  }
  options.mixins.unshift(...mixins)
  options = parseOptions(options, __constant.FUNCTION_COMPONENT_HOOKS, true)
  return Component(options)
}

export default createComponent
