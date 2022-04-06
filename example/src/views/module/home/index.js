//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import WowPage from 'wow-wx/lib/page'

new WowPage({
    onLoad(query) {
        console.log('query => ', query)
    }
})
