import { intercept } from "mobx-miniprogram";

// pages/account/account.js
Page({
  data: {
   NickName:"",
   Avatar:"",
   CampusName:"",
   Role: "",
   UserData:Object,
  },
  method:{
  },
  checkInfor:function() {
    wx.navigateTo({
      url: '../account/mineInformation/mineInformation',
    })
  },
  //退出登录
  loginOut:function(){
    wx.removeStorageSync('token');  // 删除 token
    wx.setStorageSync('userdata', {})
  },
  onLoad(options) { 
  },

  onReady() {
  },

  // 页面出现时需要通过本地token判断用户登录是否过期
  onShow() {
     let that = this
      wx.request({
        url: getApp().globalData.api + '/api/userInfoGet',
        method:"GET",
        data:{
          token:wx.getStorageSync('token')
        },
        success(res){
          let datas = res.data.data
          if (res.data.code == 0){
            //将用户信息存入全局变量
            getApp().globalData.userdata = datas
            that.setData({
              UserData:res.data.data,
              NickName: datas.nickname == "" ? datas.username : datas.nickname,
              Avatar:datas.avatar,
              CampusName:datas.campusName == "" ? "未加入校园" : datas.campusName,
              Role:datas.authority == 0 ? "校外人员" : "校园用户"
            })
          } else{
            //token 过期需要重新登录
            wx.showModal({
              title: '提示',
              content: '用户身份信息已过期，请重新登录',
              showCancel: false, // 不显示取消按钮，只显示确认按钮
              confirmText: '确认', // 设置确认按钮文字
              success(res) {
                if (res.confirm) {
                  wx.clearStorageSync('token');
                  wx.redirectTo({
                    url: '../login/login'  // 替换为你的登录页面路径
                  });
                }
              }
            });
          }
        },
        fail(err){
          console.error(err);
        }
      })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})