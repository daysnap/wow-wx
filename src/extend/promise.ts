
const promisePrototype = Promise.prototype as any

promisePrototype.toast = function (callback: (err: any) => void | boolean) {
  return this.catch((err: any) => {
    const { Modal } = getApp().wow$.mixins
    if (!(callback && callback(err)) && Modal)
      Modal.modalToast(err)
  })
}

promisePrototype.null = function () {
  return this.catch((err: any) => console.log(err))
}

if (!promisePrototype.finally) {
  promisePrototype.finally = function (callback: () => any) {
    const P = this.constructor
    return this.then(
      (value: any) => P.resolve(callback()).then(() => value),
      (reason: any) => P.resolve(callback()).then(() => { throw reason })
    )
  }
}
