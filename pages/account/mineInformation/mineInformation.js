// pages/account/mineInformation/mineInformation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Protrait:"../../../images/Protrait3.jpg",
    userName:"雨一直下",
    avatarUrl:""
  },
  method:{

  },
  confirmInformation:function () {
    wx.switchTab({
      url: '../account',
    })
  },
  showInput: function () {
    this.setData({
      isFocus: true
    });
  },

  // 输入内容变化时触发
  inputChange: function (e) {
    this.setData({
      inputValue: e.detail.value
    });
  },

  // 输入框失去焦点时触发，切换回非输入状态
  inputBlur: function () {
    this.setData({
      isFocus: false
    });
  },
  selectImage: function () {
    let that = this;
    wx.chooseMedia({
      count: 1,
      mediaType:['image'],
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        //console.log(res.tempFiles[0].tempFilePath);
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