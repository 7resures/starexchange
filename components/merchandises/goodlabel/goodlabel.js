// components/merchandises/goodlabel/goodlabel.js
Component({
  properties: {
    punishgoods:{
      type:Array,
      value:[]
    },
    sign:{
      type:Number,
      value:0
    }
  },
  data: {
    sign:0,
  },
  methods:{
    changelabel: function () {
      console.log("标签已更改!");
      // 在这里编写更改标签的逻辑
    },
    goodClick:function(e){
      if(this.data.sign === 1) 
      {
        wx.navigateTo({
          url: '../../pages/index/merchandiseInfor/merchandiseInfor?productId='+e.currentTarget.id,
        })
      }
      else
      {
       wx.navigateTo({
         url: '../../pages/mine/minepunish/minepunish?productId='+e.currentTarget.id,
       })
      }
     },
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