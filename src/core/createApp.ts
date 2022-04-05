
import type { AppOptions } from '../interface'

const createApp = (options: AppOptions) => {
  const { mixins } = options

  return App(options)
}

export default createApp
