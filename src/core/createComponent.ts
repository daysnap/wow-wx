
import type { PageOptions } from '../interface'

const App = getApp() || {}

const { __parseOptions: parseOptions, __mixins: mixins = [] } = App.wow$ || {}

const createComponent = (options: PageOptions) => {
  if (!options.mixins) {
    options.mixins = []
  }
  options.mixins.unshift(...mixins)
  // options = parseOptions(options, true)
  return Component(options)
}

export default createComponent
