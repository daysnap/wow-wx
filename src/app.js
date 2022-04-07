
import './app.json'
import './sitemap.json'
import './project.config.json'
import './app.scss'

import WowApp from '../source/lib/app'
import User from 'wow-wx/lib/mixins/user.mixin'

WowApp.use(User)

const dd = {
    d () {
        console.log('dd')
    }
}
new WowApp({
    mixins: [
        dd,
        WowApp.wow$.mixins.User,
    ],
    onLaunch(options) {
        console.log('小程序开始加载啦12', options);
        console.log('this.wow$2121 => ', this.wow$);
        console.log('WowApp.wow$2121 => ', WowApp.wow$);
    },
    onError (msg) {
        console.log('[APP ERROR] => ',msg);
    },
    onPageNotFound () {
    },
});
