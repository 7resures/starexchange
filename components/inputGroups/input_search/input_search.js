// components/inputGroups/input_search/input_search.js
Component({
  properties: {
    tags:{
      type:Array,
      value:[],
    },
    indexSelection:{
      type:Number,
      value:-1,
    }
  },
  data: {
    checkNumber:-1
  },
  methods:{
    clickLabel:function(event){
      this.setData({
        indexSelection:event.currentTarget.id
      })
      this.sendDataToParent(event.currentTarget.id)
    },
    sendDataToParent(e){
      this.triggerEvent('sendDataToParent', { value: e });
    },
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