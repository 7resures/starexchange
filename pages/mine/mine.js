// pages/mine/mine.js
Page({
  data: {
    active: 0,
    pulishgoods:[
    ],
    caregoods:[
    ],
    sign:0
  },
  method:{

  },
   onClick:function(e){        //搜索输入框搜索按钮触发事件
    console.log("这里触发了搜索事件!")
  },
  onChange:function(event){       //搜索输入框监听时间
    if (event.detail.index == 1) {
      this.setData({
        sign:1
      })
    }else{
      this.setData({
        sign:0
      })
    }

  },
  changeTab:function(e){    //传递参数sign

  },
  handleChangeLabel(e){
  },
  onClose(event) {
    const { position, instance } = event.detail;
    switch (position) {
      case 'left':
      case 'cell':
        instance.close();
        break;
      case 'right':
        Dialog.confirm({
          message: '确定删除吗？',
        }).then(() => {
          instance.close();
        });
        break;
    }
  },
 
  onLoad(options) {
  },

  onReady() {
  },

  onShow() {
    let that = this
    wx.request({
      url: getApp().globalData.api + "/api/goodsGet",
      method:"GET",
      data:{
        userId:getApp().globalData.userdata.id,
        campusName:getApp().globalData.userdata.campusName,
      },
      success(res){
        if(res.data.code == 0){
          var datas = res.data.data
          for (let index = 0; index < datas.length; index++) {
            if(datas[index].productStatus === 1) {
              datas[index].productStatus = "上架中"
            }else{
              datas[index].productStatus = "已下架"
            }
          }
          that.setData({
            pulishgoods:res.data.data
          })
          wx.request({
            url: getApp().globalData.api + "/api/goodsGet",
            method:"GET",
            data:{
              userId:getApp().globalData.userdata.id,
              concern:true
            },
            success(res){
              if(res.data.code == 0){
                var datas = res.data.data
                for (let index = 0; index < datas.length; index++) {
                  if(datas[index].productStatus === 1) {
                    datas[index].productStatus = "上架中"
                  }else{
                    datas[index].productStatus = "已下架"
                  }
                }
                that.setData({
                  caregoods:datas
                })
              }else{
                that.setData({
                  caregoods:[]
                })
              }
            },
            fail(res){
              console.log(res);
            }
          })
        }
      },
      fail(res){
        console.log(res);
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