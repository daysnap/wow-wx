
import type { AppOptions } from '../interface'
import { parseOptions as __parseOptions } from '../utils/parseOptions'
import * as __constant from '../utils/constant'

const createApp = (options: AppOptions) => {
  const { mixins: __mixins, ...rest } = options

  const wow$ = { __parseOptions, __mixins, __constant }

  return App({ ...rest, wow$ })
}

export default createApp
