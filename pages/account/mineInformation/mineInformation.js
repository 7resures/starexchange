// pages/account/mineInformation/mineInformation.js
Page({
  data: {
    Avatar:"",
    Nickname:"",
    Username:"",
    CampusName:"",
    PhoneNumber:"",
    Wechat:"",
    Qq:"",
  },
  method:{
  },
  confirmInformation:function () {
    let updateDatas =  {
      nickname:this.data.Nickname,
      campusName:this.data.CampusName,
      phoneNumber:this.data.PhoneNumber,
      wechat:this.data.Wechat,
      qq:this.data.Qq,
      username:this.data.Username,
      wechatId:"", 
      authority:0,  
    }
    if(wx.getStorageSync('uidType') == 0){
      updateDatas.username = wx.getStorageSync('uid')
    }else{
      updateDatas.wechatId = wx.getStorageSync('uid')
    }
    if(updateDatas.CampusName != ""){
      updateDatas.authority =  1
    }
    wx.request({
      url: getApp().globalData.api + "/api/updateUserInfo",
      method:"PUT",
      data:updateDatas,
      success(res){
          if(res.data.code == 0){
            wx.showModal({
              title: '提示',
              content: '用户信息修改成功',
              showCancel: false, // 不显示取消按钮，只显示确认按钮
              confirmText: '确认', // 设置确认按钮文字
            });
          }else{
            wx.showModal({
              title: '提示',
              content: res.data.msg,
              showCancel: false, // 不显示取消按钮，只显示确认按钮
              confirmText: '确认', // 设置确认按钮文字
            });
          }
      },
      fail(err){
          console.log(err);
      }
    })
  },
  showInput: function () {
    this.setData({
      isFocus: true
    });
  },

  // 输入内容变化时触发
  inputChange: function (e) {
    const field = e.currentTarget.dataset.field; // 获取 data-field 的值
    const value = e.detail.value; // 获取输入的内容
    this.setData({
      [field]: value // 动态设置 data 中对应的字段
    });
  },
  // 输入框失去焦点时触发，切换回非输入状态
  inputBlur: function () {
    this.setData({
      isFocus: false
    });
  },
  //选择图片
  selectImage: function () {
    let that = this;
    wx.chooseMedia({
      count: 1,
      mediaType:['image'],
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        that.setData({
          avatarUrl: res.tempFiles[0].tempFilePath
        });
       that.uploadImage(res.tempFiles[0].tempFilePath);
      }
    });
  },
  uploadImage: function (filePath) {
    console.log(filePath);
    wx.uploadFile({
      url: '上传文件的接口地址',
      filePath: '要上传的文件的临时路径',
      name: '上传文件对应的 key，服务器端获取文件的 key',
      formData: {
        'key1': 'value1', // 额外的表单数据
        'key2': 'value2'
      },
      success: function (res) {
        var data = res.data;
        // 上传成功后的处理逻辑,这里需要刷新头像
      },
      fail: function (err) {
        // 上传失败后的处理逻辑
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let datas = getApp().globalData.userdata
      this.setData({
        Avatar:datas.avatar,
        Nickname:datas.nickname,
        Username:datas.username,
        CampusName:datas.campusName,
        PhoneNumber:datas.phoneNumber,
        Wechat:datas.wechat,
        Qq:datas.qq,
      })
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