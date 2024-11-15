// pages/mine/minepunish/minepunish.js
Page({
  data: {
    fileList: [
    ],
    goodInfo:{},
    Name:"",
    Describe:"",
    Price:"",
    Phone:"",
    Wechar:"",
    QQ:"",
    productId:0,
  },
  afterRead:function(e){
    console.log(e)
  },
  deleteImg(e){
    let index = e.detail.index;
    this.data.fileList.splice(index,1);
    this.setData({
      fileList:this.data.fileList
    })
    console.log(index);
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      productId:options.productId
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
    let that = this
    wx.request({
      url: getApp().globalData.api + "/api/goodsGet",
      method: "GET",
      data: {
        productId: this.data.productId
      },
      success(res) {
        if (res.data.code == 0) {
          var datas = res.data.data;
    
          // 判断商品状态
          if (datas.productStatus === 1) {
            datas.productStatus = "上架中";
          } else {
            datas.productStatus = "已下架";
          }
    
          // 构建 fileList 数组，只保留图片的 URL
          var fileList = [];
          if (datas.images && datas.images.length > 0) {
            for (let index = 0; index < datas.images.length; index++) {
              fileList.push({
                url: datas.images[index], // 图片的 URL
                type: 'image' // 可选，指定文件类型为图片
              });
            }
          }
          // 更新页面数据
          that.setData({
            goodInfo: datas,  // 填充商品详情
            fileList: fileList // 填充文件列表
          });
        }
      },
      fail(res) {
        // 处理请求失败逻辑
        console.log("请求失败", res);
      }
    });
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