// components/merchandises/goodInfor/goodInfor.js
Component({
  properties:{
    goods:{
      type:Object,
      value:{}
    },
    checked:{
      type:Boolean,
      value:false
    }
  },
  data: {
  },
  methods:{
    onChange:function(e) {
      let that = this
      this.setData({
        checked:!that.properties.checked,
      })
      if(getApp().globalData.userdata.id === this.properties.goods.userId){
        wx.showModal({
          title: '提示',
          content: '你不能关注自己的商品',
          showCancel:false,
         confirmText:"确认"
        })
        this.setData({
          checked:!that.properties.checked,
        })
        return
      }
      wx.request({
        url: getApp().globalData.api + "/api/followUpdate",
        method:"PUT",
        data:{
          userId:getApp().globalData.userdata.id,
          productId:that.properties.goods.productId,
          isConcerned:that.properties.checked
        },
        success(res){ 
          if(res.data.code == 0){
            wx.showModal({
              title: '提示',
              content: res.data.msg,
              showCancel:false,
              confirmText:"确认"
            })
          }else{
            console.log(that.properties.checked);
            console.log(res.data);
          }
        },
        fail(err){
          console.log(err);
        }
      })
      // 如果不是自己的商品，处理关注后的逻辑，更新商品关注信息字段，更新商品关注表

    },
  },
  onLoad(options) {
  },

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