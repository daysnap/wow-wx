
import type { AppOptions } from '../interface'

const createApp = (options: AppOptions) => {
  return App<IAppOption>(options)
}

export default createApp
