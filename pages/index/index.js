import {createStoreBindings} from 'mobx-miniprogram-bindings'
import {store} from '../../store/store'

Page({
  data: {
    winHeight:0,
    barHeight:0,
    goods:[
      {
        id:1,
        name:"27寸水晶大电视",
        picture:"../../images/star.png",
        price:"￥999",
        category:"电器"
      },
      {
        id:2,
        name:"27寸水晶大电视",
        picture:"../../images/star.png",
        price:"￥999",
        category:"电器"
      },
      {
        id:3,
        name:"27寸水晶大电视",
        picture:"../../images/star.png",
        price:"￥999",
        category:"电器"
      },
      {
        id:4,
        name:"27寸水晶大电视",
        picture:"../../images/star.png",
        price:"￥999",
        category:"电器"
      },
      {
        id:5,
        name:"27寸水晶大电视",
        picture:"../../images/star.png",
        price:"￥999",
        category:"电器"
      }
      ,
      {
        id:6,
        name:"27寸水晶大电视",
        picture:"../../images/star.png",
        price:"￥999",
        category:"电器"
      }
      ,
      {
        id:7,
        name:"27寸水晶大电视",
        picture:"../../images/star.png",
        price:"￥999",
        category:"电器"
      }
    ]
   },
   method:{
   },
  goodInfor:function(e){    //跳转商品详页面
    let index = e.currentTarget.dataset.index;
    let goodid = this.data.goods[index].id;
    wx.navigateTo({
      url: '../../pages/index/merchandiseInfor/merchandiseInfor?index='+goodid,
    })
  },
  onLoad:function() {
    //获取当前显示窗口和导航栏的高度
    wx.getSystemInfo()
    .then(res => {
      this.setData({
        winHeight:res.windowHeight,
        barHeight:res.statusBarHeight
      })
    })
  .catch(err => {
    console.error(err);  // 捕获可能发生的错误
  });
  }
})
