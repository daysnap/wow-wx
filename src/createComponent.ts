
import type { PageOptions } from './interface'

const { wow$ } = getApp()
const { __parseOptions: parseOptions, __mixins: mixins = [], __constant } = wow$

const createComponent = (options: PageOptions) => {
  if (!options.mixins) {
    options.mixins = []
  }
  options.mixins.unshift(...mixins)
  options = parseOptions(options, __constant.FUNCTION_COMPONENT_HOOKS, true)
  return Component(options)
}

createComponent.wow$ = wow$

export default createComponent
