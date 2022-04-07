//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'wow-wx/lib/page'

new WowPage({
    onLoad(query) {
        console.log('page => ', WowPage.wow$)
        console.log('query => ', query)
        this.d()
    }
})
