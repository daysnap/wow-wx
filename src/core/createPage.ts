
import type { PageOptions } from '../interface'

const createPage = (options: PageOptions) => {
  const { __parseOptions: parseOptions, __mixins: mixins = [], __constant } = getApp().wow$
  if (!options.mixins) {
    options.mixins = []
  }
  options.mixins.unshift(...mixins)
  options = parseOptions(options, __constant.FUNCTION_PAGE_HOOKS)
  return Page(options)
}

export default createPage
