
import './app.json'
import './sitemap.json'
import './project.config.json'
import './app.scss'

import { createApp } from 'wow-wx'

global.xxx = 11

createApp({
    onLaunch(options) {
        console.log('小程序开始加载啦1', options);
        console.log('this.wow$2 => ', this.wow$);
    },
    onError (msg) {
        console.log('[APP ERROR] => ',msg);
    },
    onPageNotFound () {
    },
});
