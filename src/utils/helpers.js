
const getApp = () => getApp ? getApp() : {}

const nf = () => {}

const withPromise = fn => (options = {}) => {
    const { success, fail } = options
    fn = typeof fn === 'string' ? wx[fn] : fn
    return (success || fail)
        ? fn(options)
        : new Promise((resolve, reject) => fn({ success: resolve, fail: reject, ...options }))
}

export default {
    nf,
    withPromise,
    getApp,
}
