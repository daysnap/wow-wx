
import type { PageOptions } from '../interface'

const App = getApp() || {}

console.log('2222 => ', App)

const { __parseOptions: parseOptions, __mixins: mixins = []  } = App.wow$ || {}

const createPage = (options: PageOptions) => {
  if (!options.mixins) {
    options.mixins = []
  }
  options.mixins.unshift(...mixins)
  // options = parseOptions(options)
  return Page(options)
}

export default createPage
