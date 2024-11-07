// components/merchandises/simplegoods/simplegoods.js
Component({
  options:{
    multipleSlots:true,
    styleIsolation:'isolated'
  },
  /**  
   * 组件的属性列表
   */
  properties: {
     goods:Object,
     goodsid:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    goods:[
      {
        id:1,
        name:"27寸水晶大电视",
        picture:"../../images/star.png",
        price:"￥999",
        category:"电器"
      },
      {
        id:1,
        name:"27寸水晶大电视",
        picture:"../../images/star.png",
        price:"￥999",
        category:"电器"
      },
      {
        id:1,
        name:"27寸水晶大电视",
        picture:"../../images/star.png",
        price:"￥999",
        category:"电器"
      },
      {
        id:1,
        name:"27寸水晶大电视",
        picture:"../../images/star.png",
        price:"￥999",
        category:"电器"
      },
      {
        id:1,
        name:"27寸水晶大电视",
        picture:"../../images/star.png",
        price:"￥999",
        category:"电器"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goodInfor:function(e){
      // console.log("这里是组件的方法");
      // console.log(e);
      // console.log("这里是组件的方法");
  }
  },
})
