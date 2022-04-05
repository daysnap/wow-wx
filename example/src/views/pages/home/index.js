//index.js
import './index.json'
import './index.scss'
import './index.wxml'


import { createPage } from 'wow-wx'

console.log('dda => ', module.exports)
const regeneratorRuntime = global.regeneratorRuntime = require('src/@babel/runtime.js')

const dd = () => new Promise((resolve, reject) => {
  setTimeout(resolve, 1000)
})

createPage({
  async onLoad(query) {
    console.log('1 => ', query)
    await dd()
    console.log('22')
  }
})

