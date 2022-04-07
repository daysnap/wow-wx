
import { IPlugin, IAnyOne } from '../interface'
import { promisify } from './promisify.mixin'
import { storageGet, storageRemove, storageSet } from './storage.mixin'

const $$USER_INFO = '$$USER_INFO'

export const user = {
  data: {
    user$: ''
  },
  userGet () {
    return storageGet($$USER_INFO).then(user$ => {
      (this as any).setData({ user$ })
      return Promise.resolve(user$)
    }).catch(() => {
      (this as any).setData({ user$: '' })
      return Promise.reject()
    })
  },
  userUpdate (data: IAnyOne = {}) {
    let user
    return new Promise((resolve, reject) => {
      this.userGet().then(res => {
        user = res
      }).catch(() => {
        user = {}
      }).finally(() => {

      })
    })
  }
}

const User: IPlugin<any> = {
  install (Wow){
    Wow.mixins.User = user
  }
}

export default User
