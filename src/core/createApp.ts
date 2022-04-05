
import type { AppOptions } from '../interface'
import { parseOptions as __parseOptions } from '../utils/parseOptions'

const createApp = (options: AppOptions) => {
  const { mixins: __mixins, ...rest } = options
  const wow$ = { __parseOptions, __mixins }

  return App({ ...rest, wow$ })
}

export default createApp
