// pages/index/index.js
Page({
  data: {
    goods:[
    ],
    showgoods:[],
    tags:[],
    indexSelection:0,
    goodsNumber:0,
    value:"",
    nowPage:1,
  },
  goodInfor:function(e){
    wx.navigateTo({
      url: './merchandiseInfor/merchandiseInfor?productId='+e.currentTarget.id,
    })
  },

    // onScrollToUpper: function () {
    //   this.setData({ showTopLoading: true });
    //   setTimeout(() => {
    //     this.setData({ showTopLoading: false });
    //   }, 2000); 
    // },
  
    // 滚动到底部时触发
    onScrollToLower: function () {
      let that = this
      console.log("触底");
      this.setData({ showBottomLoading: true });
      setTimeout(() => {
        this.setData({ showBottomLoading: false });
      }, 1000); // 1秒后隐藏
      wx.request({
        url: getApp().globalData.api + "/api/goodsGet",
        method:"GET",
        data:{
          page:that.data.nowPage + 1,
          type:that.data.indexSelection,
          pageSize:6,
          searchContent:that.data.value,
          campusName:getApp().globalData.userdata.campusName,
          random:false,
        },
        success(res){
          if(res.data.code == 0){
            var datas = res.data.data;
            for (let i = 0; i < datas.length; i++) {
              for (let j = 0; j < that.data.tags.length; j++) {
                  if (datas[i].tags[0] == that.data.tags[j].value) {
                    datas[i].tags = that.data.tags[j].text
                    break
                  }
              }
            }
            var newdatas = that.data.goods.concat(datas)
            console.log(newdatas);
            that.setData({
              goods:newdatas,
              goodsNumber:res.data.data.length,
              nowPage:that.data.nowPage + 1
            })
          }
        },
        fail(err){
          console.log(err);
        }
      })
    },
  
    // 滚动中事件
    onScroll: function () {
      if (!this.data.isScrolling) {
        this.setData({ isScrolling: true });
        setTimeout(() => {
          this.setData({ isScrolling: false });
        }, 300);
      }
    },
  /**
   * 生命周期函数--监听页面加载
   */  
  onChange(e) {
    this.setData({
      value: e.detail,
    });
  },
  onClick:function(e){
    let that = this
    this.setData({
      indexSelection:0,
      nowPage:1
    })
    wx.request({
      url: getApp().globalData.api + "/api/goodsGet",
      method:"GET",
      data:{
        page:that.data.nowPage,
        type:that.data.indexSelection,
        pageSize:6,
        searchContent:that.data.value,
        campusName:getApp().globalData.userdata.campusName,
        random:false,
      },
      success(res){
        if(res.data.code == 0){
          var datas = res.data.data;
          for (let i = 0; i < datas.length; i++) {
            for (let j = 0; j < that.data.tags.length; j++) {
                if (datas[i].tags[0] == that.data.tags[j].value) {
                  datas[i].tags = that.data.tags[j].text
                  break
                }
            }
          }
          console.log(res.data);
          that.setData({
            goods:datas,
            goodsNumber:res.data.data.length
          })
        }
      },
      fail(err){
        console.log(err);
      }
    })
  },
  handleData:function(e){
    let that = this
    this.setData({
      indexSelection:e.detail.value
    })
    console.log(e.detail.value);
    wx.request({
      url: getApp().globalData.api + "/api/goodsGet",
      method:"GET",
      data:{
        page:this.data.nowPage,
        type:that.data.indexSelection,
        pageSize:6,
        campusName:getApp().globalData.userdata.campusName,
        random:false,
      },
      success(res){
        if(res.data.code == 0){
          var datas = res.data.data;
          for (let i = 0; i < datas.length; i++) {
            for (let j = 0; j < that.data.tags.length; j++) {
                if (datas[i].tags[0] == that.data.tags[j].value) {
                  datas[i].tags = that.data.tags[j].text
                  break
                }
            }
          }
          console.log(res.data);
          that.setData({
            goods:datas,
            goodsNumber:res.data.data.length
          })
        }else{
          that.setData({
            goods:[],
            goodsNumber:0
          })
        }
      },
      fail(err){
        console.log(err);
      }
    })
  },
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
    var that = this
    wx.request({
      url: getApp().globalData.api +"/common/tagGet",
      method:"GET",
      data:{},
      success(res){
        let Reslist = []
        for (let index = 0; index < res.data.data.length; index++) {
          Reslist.push({text:res.data.data[index].tag_name,value:res.data.data[index].id})
        }
        that.setData({
          tags:Reslist
        })
        wx.request({
          url: getApp().globalData.api + "/api/goodsGet",
          method:"GET",
          data:{
            page:1,
            type:that.data.indexSelection,
            pageSize:6,
            campusName:getApp().globalData.userdata.campusName,
            random:false,
          },
          success(res){
            if(res.data.code == 0){
              var datas = res.data.data;
              for (let i = 0; i < datas.length; i++) {
                for (let j = 0; j < that.data.tags.length; j++) {
                    if (datas[i].tags[0] == that.data.tags[j].value) {
                      datas[i].tags = that.data.tags[j].text
                      break
                    }
                }
              }
              console.log(res.data);
              that.setData({
                goods:datas,
                goodsNumber:res.data.data.length
              })
            }
          },
          fail(err){
            console.log(err);
          }
        })
      },
      fail(err){
        console.log(err);
      }
    })

  },
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