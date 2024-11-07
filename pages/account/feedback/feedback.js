// pages/account/feedback/feedback.js
import Dialog from '@vant/weapp/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    feedbackContent:""
  },
  bindTextAreaBlur:function(e){
    this.setData({
      feedbackContent:e.detail.value
    })
  },
  commitInfor:function(){
    if(this.data.feedbackContent)
    console.log(this.data.feedbackContent);
    else
    {
      Dialog.alert({
        title: '提示',
        message: '请输入反馈内容！',
        messageAlign:"center",
      }).then(() => {
        // on close
      });
    }
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
