
import type { PageOptions } from '../interface'
import parseOptions from '../utils/parseOptions'

const createPage = (options: PageOptions) => {
  options = parseOptions(options)
  return Page(options)
}
