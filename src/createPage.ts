
import type { PageOptions } from './interface'

const { wow$ } = getApp()
const { __parseOptions: parseOptions, __mixins: mixins = [], __constant } = wow$

const createPage = (options: PageOptions) => {
  if (!options.mixins) {
    options.mixins = []
  }
  options.mixins.unshift(...mixins)
  options = parseOptions(options, __constant.FUNCTION_PAGE_HOOKS)
  return Page(options)
}

createPage.wow$ = wow$

export default createPage
