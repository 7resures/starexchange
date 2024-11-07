// pages/account/account.js
Page({
  data: {
   NickName:"",
   Avatar:"",
  },
  method:{
  },
  checkInfor:function() {
    console.log("information is clicked!");
    wx.navigateTo({
      url: '../account/mineInformation/mineInformation',
    })
  },
  //退出登录
  loginOut:function(){
    wx.removeStorageSync('token');  // 删除 token
    wx.clearStorageSync();  // 清除所有存储数据
  },
  onLoad(options) {     
    this.setData({
      NickName:wx.getStorageSync('nickName'),
      Avatar:wx.getStorageSync('avatar'),                     
    })
    console.log(this.data.NickName);
    console.log(this.data.Avatar);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

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