
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
    let user: any
    return new Promise((resolve, reject) => {
      this.userGet().then(res => {
        user = res
      }).catch(() => {
        user = {}
      }).finally(() => {
        Object.assign(user, data)
        storageSet($$USER_INFO, user).then(resolve).catch(reject);
        (this as any).setData({ user$: user })
      })
    })
  },
  userLogin (options?: WechatMiniprogram.LoginOption) {
    return promisify<WechatMiniprogram.LoginOption, WechatMiniprogram.LoginSuccessCallbackResult>(wx.login)(options)
  },
  userLogout () {
    return storageRemove($$USER_INFO)
  },
  userGetInfo () {
    return promisify<WechatMiniprogram.GetUserInfoOption, WechatMiniprogram.GetUserInfoSuccessCallbackResult>(wx.getUserInfo)()
  },
  userGetProfile (options?: WechatMiniprogram.GetUserProfileOption) {
    return promisify<WechatMiniprogram.GetUserProfileOption, WechatMiniprogram.GetUserProfileSuccessCallback>(wx.getUserProfile || wx.getUserInfo)({
      desc: '用于完善会员资料',
      ...options,
    })
  },
}

const User: IPlugin<any> = {
  install (Wow){
    console.log('ddd => ', Wow)
    Wow.mixins.User = user
  }
}

export default User
