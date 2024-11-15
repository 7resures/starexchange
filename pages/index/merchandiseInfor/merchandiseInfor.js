
Page({
  data: {
    id:Number,
    good:{},
    selectChecked:false,
    viewsCount:0,
  },
  onLoad:function (options) {
    let that = this
    this.setData({
      id:options.productId
    })
    wx.request({
      url: getApp().globalData.api + "/api/goodsGet",
      method:"GET",
      data:{
        productId:that.data.id
      },
      success(res){
        if(res.data.code == 0){
          that.setData({
            good:res.data.data
          })
          wx.request({
            url: getApp().globalData.api + "/api/followGet",
            method:"GET",
            data:{
              userId: getApp().globalData.userdata.id,
              productId: that.data.good.productId
            },
            success(res){
              if(res.data.code == 0){
                that.setData({
                  selectChecked:res.data.data
                })
              }else{
                console.log(res.data);
              }
            },
            fail(err){
              console.log(err);
            }
          })
        }
      },
      fail(err){
      }
    })
    wx.request({
      url: getApp().globalData.api + "/api/addView",
      method:"GET",
      data:{
        productId:that.data.id
      },
      success(res){
        that.setData({
          viewsCount:res.data.data
        })
      },
      fail(err){
        console.log(err);
      }
    })
  },
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow(options) {
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