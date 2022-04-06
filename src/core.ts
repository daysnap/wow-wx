
import type { Options, IAnyOne } from './interface'
import { FUNCTION_PAGE_HOOKS, FUNCTION_COMPONENT_HOOKS } from './utils/constant'

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

export default class Core {

  options: Options

  isComponent: boolean

  constructor (options: Options, isComponent: boolean) {
    this.options = options
    this.isComponent = isComponent
  }

  parseOptions (options: Options, keys: string[], isComponent = false) {
    const { mixins, data = {} } = options
    delete options.mixins
    if (!mixins || !mixins.length) {
      return options
    }

    const mixinData: IAnyOne = {}
    const mixinOption: IAnyOne = {}
    const target = initTarget(keys)

    let loop: any
    ;(loop = (mixins: Options[]) => {
      mixins.forEach(({ ...item }) => {
        const { mixins, data } = item
        delete item.mixins
        delete item.data
        if (mixins) {
          loop(mixins)
        }
        if (data) {
          Object.assign(mixinData, data)
        }
        mixinTarget(target, item, keys)
        Object.assign(mixinOption, item)
      })
    })(mixins)

    mixinTarget(target, options, keys)

    if (isComponent) {
      if (!options.methods) {
        options.methods = {}
      }
      options.methods = Object.assign({}, mixinOption, options.methods)
    } else {
      options = Object.assign({}, mixinOption, options)
    }
    options.data = Object.assign({}, mixinData, data)

    nestTarget(target, options)

    return options
  }

}
