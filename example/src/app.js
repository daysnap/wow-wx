
import './app.json'
import './sitemap.json'
import './project.config.json'
import './app.scss'
import './wxs/filter.wxs'

import { createApp } from 'wow-wx'

const regeneratorRuntime = global.regeneratorRuntime = require('src/@babel/runtime.js')

createApp({
  onLaunch(options) {
    console.log('options => ', options)
  }
})

console.log('dd22111 => ', regeneratorRuntime === global.regeneratorRuntime)
