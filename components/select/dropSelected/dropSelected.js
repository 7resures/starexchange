// components/select/dropSelected/dropSelected.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    campus: {
      type: Array,  // 确保类型是数组
      value: []     // 默认值为空数组
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    showDropdown: false,
    animationData: {},
    selectedItem: '请选择您所在的学校',
  },

  methods: {
    toggleDropdown: function() {
      let showDropdown = !this.data.showDropdown;
      this.setData({
        showDropdown: !this.data.showDropdown
      });
      this.selectStatus(this.data.showDropdown)
    },
    selectStatus:function(status){
      let animation = wx.createAnimation({
        duration: 300,
        timingFunction: 'ease'
      });
      if (status) {
        animation.height('150rpx').step();
      } else {
        animation.height('0').step();
      }
      this.setData({
        showDropdown: status,
        animationData: animation.export()
      });
    },
    scrollToLower(e) {
      // 在这里可以添加加载更多数据的逻辑
    },
    selectItem: function(event) {
      this.setData({
        selectedItem: event.currentTarget.dataset.text,
        showDropdown: !this.data.showDropdown
      });
      this.selectStatus(this.data.showDropdown)
      this.triggerEvent('selectedItemChange', event.currentTarget.dataset.text);
    },
    preventTouchMove: function() {
      return;
    },
  },
})
