//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowComponent from 'wow-wx/lib/component'

new WowComponent({
    onLoad(query) {
        console.log('query => ', query)
    }
})
