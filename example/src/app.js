
import './app.json'
import './sitemap.json'
import './project.config.json'
import './app.scss'
import './wxs/filter.wxs'

import { createApp } from 'wow-wx'

createApp({
  onLaunch(options) {
    console.log('options => ', options)
  }
})

console.log('dd => ', getApp())
