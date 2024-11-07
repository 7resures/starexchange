// pages/account/uploadGoods/uploadGoods.js
import Toast from '@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
      option1: [
        { text: '数码', value: 0 },
        { text: '生活', value: 1 },
        { text: '学习', value: 2 },
        { text: '娱乐', value: 3 },
        { text: '电器', value: 4 },
        { text: '衣物', value: 5 },
        { text: '日常', value: 6 },
        { text: '请选择', value: 7 },
      ],
      value1: 7,
      fileList: [

      ],
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  deleteImg(e){
    let index = e.detail.index;
    this.data.fileList.splice(index,1);
    this.setData({
      fileList:this.data.fileList
    })
    console.log(index);
  }, 
  afterRead(event) {
    const { file } = event.detail;
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
      filePath: file.url,
      name: 'file',
      formData: { user: 'test' },
      success(res) {
        // 上传完成需要更新 fileList
        const { fileList = [] } = this.data;
        fileList.push({ ...file, url: res.data });
        this.setData({ fileList });
      },
    });
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