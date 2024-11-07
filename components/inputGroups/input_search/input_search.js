// components/inputGroups/input_search/input_search.js
Page({
  data: {
    labels:["数码","生活","学习","娱乐","电器","衣物","日常"],
    checkNumber:9999
  },
  method:{
    
  },
  clickLabel:function(event){
    this.setData({
      checkNumber:Number(event.currentTarget.dataset.index)
    })
  },
  onLoad(options) {

  },
  onReady() {

  },
  onShow() {

  },
  onHide() {

  },
  onUnload() {

  },
  onPullDownRefresh() {

  },
  onReachBottom() {

  },

  onShareAppMessage() {

  }
})