
import type { AppOptions, PageOptions, IAnyOne, Options } from '../interface'

const initTarget = (keys: string[]) => {
  return keys.reduce<IAnyOne>((res, key) => {
    res[key] = []
    return res
  }, {})
}

const mixinTarget = (target: IAnyOne, options: Options, keys: string[]) => {
  Object.keys(options).filter(k => keys.includes(k))
  return target
}


export const parseAppOptions = (options: AppOptions) => {
  const { mixins } = options
  if (!mixins || !mixins.length) {

  }
}

export const parsePageOptions = (options: PageOptions) => {
  const { mixins } = options
  delete options.mixins
  if (!mixins || !mixins.length) {
    return options
  }
}

