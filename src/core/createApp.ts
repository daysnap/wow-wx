/// <reference path="../../typings/index.d.ts" />

interface AppOptions extends IAppOption {
  mixins?: []
}

const createApp = (options: AppOptions) => {
  return App<IAppOption>(options)
}

export default createApp
