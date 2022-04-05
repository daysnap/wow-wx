
import type { AppOptions } from '../interface'
import { parseOptions } from '../utils/parseOptions'

const createApp = (options: AppOptions) => {
  const { mixins, ...rest } = options
  const wow$ = { parseOptions, mixins }
  return App({ ...rest, wow$ })
}

export default createApp
