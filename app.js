// app.js
import { promisifyAll } from 'miniprogram-api-promise'
const wxp = wx.p = {}
promisifyAll(wx,wxp)
App({
  globalData:{
    username:'',
    api:'http://10.18.1.24:8080'
  },
  onLaunch() {
  }
})
