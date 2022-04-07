
import { IPlugin, IAnyOne } from '../interface'

type PromisifySuccessResult<P, T extends IAnyOne> = P extends { success: any } ? void : P extends { fail: any } ? void : P extends { complete: any } ? void : Promise<T>

export function promisify<T, P> (fn: string | ((options: T) => void)) {
  return function (options: T) : PromisifySuccessResult<T, P> {
    const { success, fail, complete } = options as any
    const isPromise = !(success || fail || complete)
    const fun = typeof fn === 'string' ? (wx as any)[fn] : fn
    const result = (isPromise ? fun(options) : new Promise<P>((resolve, reject) => fun({  ...options, success: resolve, fail: reject  })))
    return result as PromisifySuccessResult<T, P>
  }
}

const Promisify: IPlugin<any> = {
  install(Wow) {
    Wow.mixins.Promisify = {
      promisify
    }
  }
}

export default Promisify
