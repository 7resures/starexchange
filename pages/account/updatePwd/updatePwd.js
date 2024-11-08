// pages/account/updatepwd/updatepwd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oldPwd:"",
    newPwd:"",
    confirmNewPwd:"",
  },
  inputChange: function (e) {
    const field = e.currentTarget.dataset.field; // 获取 data-field 的值
    const value = e.detail; // 获取输入的内容
    this.setData({
      [field]: value // 动态设置 data 中对应的字段
    });
  },
  replacePwd:function(){
    const username = getApp().globalData.userdata.username
    if (username === "") {
      wx.showModal({
        title: '提示',
        content: '当前登录账号未设置登录账号，请设置登录账号',
        showCancel: false, // 不显示取消按钮，只显示确认按钮
        confirmText: '确认', // 设置确认按钮文字
      })
      return
    }
    if (this.data.newPwd != this.data.confirmNewPwd) {
      wx.showModal({
        title: '提示',
        content: '两次密码不一致',
        showCancel: false, // 不显示取消按钮，只显示确认按钮
        confirmText: '确认', // 设置确认按钮文字
      })
      return
    }
    wx.request({
      url: getApp().globalData.api + "/api/updatePwd" ,
      method:"PUT",
      data:{
        username:username,
        password:this.data.newPwd
      },
      success(res){
        if (res.data.code == 0){
          wx.showModal({
            title: '提示',
            content: '修改成功',
            showCancel:false,
            confirmText:"确认"
          })
        }else{
          console.log(res);
          wx.showModal({
            title: '提示',
            content: res.data.msg,
            showCancel:false,
            confirmText:"确认"
          })
        }
      },
      fail(err){
        
      }
    })
  },
  resetContent:function(){
    this.setData({
      oldPwd:"",
      newPwd:"",
      confirmNewPwd:"",
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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