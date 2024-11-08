// app.js
import { promisifyAll } from 'miniprogram-api-promise'
const wxp = wx.p = {}
promisifyAll(wx,wxp)
App({
  globalData:{
    uid:'',
    uidType:0,
    api:'http://127.0.0.1:8080',
    userdata: Object,
// authority: 
// avatar: 
// campusId: 
// campusName: 
// id: 
// identity: 
// nickname: 
// password: 
// phoneNumber: 
// qq: 
// username: 
// wechat: 
// wechatId: 
  },
  onLaunch() {
  }
})
