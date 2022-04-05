
import type { PageOptions } from '../interface'
import getApp from './getApp'

const { parseOptions, mixins = [] } = getApp().wow$

const createComponent = (options: PageOptions) => {
  if (!options.mixins) {
    options.mixins = []
  }
  options.mixins.unshift(...mixins)
  options = parseOptions(options, true)
  return Component(options)
}

export default createComponent
