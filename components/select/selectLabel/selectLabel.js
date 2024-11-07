// components/select/selectLabel/selectLabel.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多 slot 支持
    styleIsolation: 'isolated'
  },
  properties: {
    src:{
      type:String,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    selectionClick:function(e){
       wx.navigateTo({
         url: this.properties.src,
       })
    }
  }
})
