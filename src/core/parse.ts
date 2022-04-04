
import type { AppOptions, PageOptions, IAnyOne, Options } from '../interface'

import { FUNCTION_PAGE_HOOKS } from '../utils/constant'

const initTarget = (keys: string[]) => {
  return keys.reduce<IAnyOne>((res, key) => {
    res[key] = []
    return res
  }, {})
}

const mixinTarget = (target: IAnyOne, options: Options, keys: string[]) => {
  Object.keys(options)
    .filter(k => keys.includes(k))
    .forEach(k => target[k].push(options[k]))
  return target
}

const nestTarget = (target: IAnyOne, options: Options) => {
  Object.keys(target)
    .filter(k => !!target[k].length)
    .forEach(k => {
      options[k] = function (...args: any) {
        target[k].forEach((fn: any) => fn.bind(this)(...args))
      }
    })
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
  const target = initTarget(FUNCTION_PAGE_HOOKS)

  const mixinData: IAnyOne = {}
  const mixinOption: IAnyOne = {}

  let loop


}

const parseOptions = (options: Options) => {
  const { mixins } = options
  
}
