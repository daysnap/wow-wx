//index.js
import './index.json'
import './index.scss'
import './index.wxml'

import { createPage } from 'wow-wx'

createPage({
  onLoad(query) {
    console.log('query => ', query)
  }
})

