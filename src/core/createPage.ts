
import type { PageOptions } from '../interface'

const { __parseOptions: parseOptions, __mixins: mixins = [] } = getApp().wow$

const createPage = (options: PageOptions) => {
  if (!options.mixins) {
    options.mixins = []
  }
  options.mixins.unshift(...mixins)
  options = parseOptions(options)
  return Page(options)
}

export default createPage
