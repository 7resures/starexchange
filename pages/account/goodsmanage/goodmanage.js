// pages/account/goodsmanage/goodmanage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList:[
    ],
    onShowList:[],
    tagsLabel:{},
    option1: [
      { text: '全部商品', value: 0 },
      { text: '下架商品', value: 1 },
      { text: '在售商品', value: 2 },
    ],
    option2: [
      { text: '发布时间', value: 'a' },
      { text: '商品类型', value: 'b' },
    ],
    value1: 0,
    value2: 'a',
  },
  statusControl:function(e){
   var index = e.currentTarget.id
   var that = this.data.goodsList
   that[index].productStatus = "已下架"
   this.setData({
    goodsList:that
   })
   console.log(this.data.goodsList);
  },
  deleteGood:function(e){
    let that = this;
    console.log(that.data.onShowList[e.currentTarget.id].userId);
    console.log(that.data.onShowList[e.currentTarget.id].productId);
    wx.request({
      url: getApp().globalData.api +"/api/goodsDelete",
      method:"DELETE",
      data:{
        userId:that.data.onShowList[e.currentTarget.id].userId,
        productId:that.data.onShowList[e.currentTarget.id].productId
      },
      success(res){
        if(res.data.code == 0){
          //删除当前data中的数据并将双向绑定的数据刷新
          for (let index = 0; index < that.data.goodsList.length; index++) {
              if(that.data.goodsList[index].productId == that.data.onShowList[e.currentTarget.id].productId){
                that.data.goodsList.splice(index,1);
                break
              }
          }
          that.data.onShowList.splice(e.currentTarget.id,1);
          that.setData({
            goodsList: that.data.goodsList,
            onShowList: that.data.onShowList
          })
        }else{
          console.log(res);
        }
      },
      fail(err){
        console.log(err);
      }
    })
  },
  onLoad(options) {

  },
  onReady() {

  },
  onShow() {
    let that = this 
    wx.request({
      url: getApp().globalData.api + "/common/tagGet",
      method:"GET",
      data:{
      },
      success(res){
        var tags = {}
        for (let index = 0; index < res.data.data.length; index++) {
          tags[res.data.data[index].id] = res.data.data[index].tag_name
        }
       that.setData({
        tagsLabel: tags
       })
        wx.request({
          url: getApp().globalData.api + "/api/goodsGet",
          method:"GET",
          data:{
            userId:getApp().globalData.userdata.id
          },
          success(res){
            if(res.data.code == 0){
              var datas = res.data.data
              //处理返回数据
              for (let index = 0; index < datas.length; index++) {
                  if(datas[index].productStatus == 1){
                    datas[index].productStatus = "上架中"
                  }else{
                    datas[index].productStatus = "下架中"
                  }
                  datas[index].tags = that.data.tagsLabel[datas[index].tags[0]]
                  datas[index].productDescription = datas[index].productDescription.length > 20 ?  datas[index].productDescription.substring(0, 20) + '...' : datas[index].productDescription;
              }
              that.setData({
                goodsList:datas,
                onShowList:datas
              })
            }
          },
          fail(err){
            console.log(res);
          }
        })

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