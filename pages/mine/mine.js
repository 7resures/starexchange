// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    pulishgoods:[
      
    ],
    caregoods:[

    ]
  },
   onClick:function(e){        //搜索输入框搜索按钮触发事件
    console.log("这里触发了搜索事件!")
  },
  onChange:function(e){       //搜索输入框监听时间
    console.log("这里触发了输入事件!")
  },
  changeTab:function(e){    //传递参数sign
     this.setData({
       sign:e.detail.index
     })
     if(this.data.sign === 0 )
     {
      let goodlabel1 = this.selectComponent('#label1')
      goodlabel1.changelabel(0);
     }
     else
     {
      let goodlabel2 = this.selectComponent('#label2')
      goodlabel2.changelabel(1);
     }

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