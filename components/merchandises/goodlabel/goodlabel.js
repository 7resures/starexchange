// components/merchandises/goodlabel/goodlabel.js
Page({

  /**
   * 页面的初始数据
   */
  properties: {
    
  },
  data: {
    sign:0,
    goodlabels:[
      {
        id:1,
        url:"../../../images/2.jpg",
        state:"上架中",
        uploadDate:"2022/11/19",
        name:"星之守护者手办"
      },
      {
        id:2,
        url:"../../../images/2.jpg",
        state:"上架中",
        uploadDate:"2022/11/19",
        name:"星之守护者手办"
      },
      {
        id:3,
        url:"../../../images/3.jpg",
        state:"上架中",
        uploadDate:"2022/11/19",
        name:"星之守护者手办"
      },
      {
        id:4,
        url:"../../../images/2.jpg",
        state:"上架中",
        uploadDate:"2022/11/19",
        name:"星之守护者手办"
      },
      {
        id:5,
        url:"../../../images/2.jpg",
        state:"上架中",
        uploadDate:"2022/11/19",
        name:"星之守护者手办"
      },
      {
        id:6,
        url:"../../../images/3.jpg",
        state:"上架中",
        uploadDate:"2022/11/19",
        name:"星之守护者手办"
      }
    ],
    caregoods:[
      {
        id:3,
        url:"../../../images/3.jpg",
        state:"上架中",
        uploadDate:"2022/11/19",
        name:"星之守护者手办"
      },
      {
        id:2,
        url:"../../../images/2.jpg",
        state:"上架中",
        uploadDate:"2022/11/19",
        name:"星之守护者手办"
      },
      {
        id:1,
        url:"../../../images/2.jpg",
        state:"上架中",
        uploadDate:"2022/11/19",
        name:"星之守护者手办"
      },
      {
        id:6,
        url:"../../../images/3.jpg",
        state:"上架中",
        uploadDate:"2022/11/19",
        name:"星之守护者手办"
      },
      {
        id:5,
        url:"../../../images/2.jpg",
        state:"上架中",
        uploadDate:"2022/11/19",
        name:"星之守护者手办"
      },
      {
        id:4,
        url:"../../../images/1.jpg",
        state:"上架中",
        uploadDate:"2022/11/19",
        name:"星之守护者手办"
      }
    ]

  },
  method:{
    
  },
  goodclick:function(e){
   if(this.data.sign === 1) 
   {
     wx.navigateTo({
       url: '../../pages/index/merchandiseInfor/merchandiseInfor',
     })
   }
   else
   {
    wx.navigateTo({
      url: '../../pages/mine/minepunish/minepunish',
    })
   }
  },
  changelabel:function(index){
  this.setData({
    sign:index
  })
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