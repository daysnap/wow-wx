//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import createPage from 'wow-wx/es/core/createPage'

createPage({
    mixins: [
        createPage.wow$.mixins.Modal
    ],
    onLoad(query) {
        console.log('query => ', query)
    }
})
