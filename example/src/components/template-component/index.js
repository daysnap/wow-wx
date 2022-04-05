import './index.json'
import './index.wxml'
import './index.scss'

import { createComponent } from 'wow-wx'

createComponent({
  externalClasses: ['class-external'],
  options: {
    multipleSlots: true,
    addGlobalClass: true,
  },
  properties: {},
})
