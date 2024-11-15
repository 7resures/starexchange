// pages/account/uploadGoods/uploadGoods.js
import Toast from '@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
      Name:"",
      Price:Number,
      Description:"",
      Wechat:"",
      QQ:"",
      option1: [],
      value1: 0,
      fileList: [
      ],
      uploadFiles:[],
      deletable: false,
    },
    handleInputChange:function(e) {
      const { field } = e.currentTarget.dataset; // 获取 data-field 的值
      this.setData({
        [field]: e.detail.value, // 动态设置对应的 data 字段
      });

    },
    onDropdownChange:function(e){
      this.setData({
        value1: e.detail
      });
      console.log(this.data.value1);
    }
    ,
  deletePic:function(e){
    let that = this
    this.data.fileList.splice(e.detail.index,1)
    this.data.uploadFiles.splice(e.detail.index,1)
    this.setData({
      fileList:that.data.fileList,
      uploadFiles:that.data.uploadFiles,
    })
  },
  afterRead(event) {
    var file = event.detail.file;
    let FileList = []
    let FileUrl = []
    for (let index = 0; index < file.length; index++) {
      FileList.push({url:file[index].url})
      FileUrl.push(file[index].url)
    }
    console.log(FileList);
    console.log(FileUrl);
   this.setData({
    fileList:FileList,
    uploadFiles:FileUrl
   })
  },
  submitGood:function(){
    let v = this.data.value1
    var textValue;
    
    for (let index = 0; index < this.data.option1.length; index++) {
        if(this.data.option1[index].value == v){
          textValue = this.data.option1[index].text;
          break;
        }
    }
    if(textValue == undefined || textValue == "请选择"){
      wx.showModal({
        title: '提示',
        content: '请选择商品类别',
        showCancel:false,
        confirmText:"确认",
      })
      return
    }
    let that = this
    wx.request({
      url: getApp().globalData.api + "/api/goodInfoUpload",
      method: 'POST',
      data:{
        userId: getApp().globalData.userdata.id,
        productName:that.data.Name,
        productDescription:that.data.Description,
        productPrice:parseFloat(that.data.Price),
        contactWeChat:that.data.Wechat,
        contactPhone:that.data.PhoneNumber,
        contactQQ:that.data.QQ,
        tags:[ textValue ],
        productStatus:1,
        ProductStore:0,
        productViews:0,
      },
      success(res){
        // console.log(that.data.Name);
        // console.log(that.data.Description);
        // console.log(that.data.Price);
        // console.log([that.data.option1[v].text]);
        let pid = res.data.data
        if (res.data.code == 0) {
          that.data.uploadFiles.forEach(filePath => {
            wx.uploadFile({
              url: getApp().globalData.api + "/api/goodPicUpload",
              filePath: filePath, 
              name: 'images', 
              formData: {
                Pid: pid
              },
              success(res) {
                wx.showModal({
                  title: '提示',
                  content: '上架成功，即将跳转',
                  showCancel:false,
                  confirmText:"确认",
                })
                setTimeout(() => {
                  wx.switchTab({
                    url: '../../account/account',
                  })
                }, 1000); 
               
              },
              fail(err) {
                console.error('上传失败:', err);
              }
            });
          });
        }else{
          console.log(res);
          wx.showModal({
            title: '提示',
            content: '确认选择商品类别',
            showCancel:false,
            confirmText:"确认"
          })
        }
      },
      fail(err){
        console.log(err);
      }
    })
  },
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    let userData = getApp().globalData.userdata
    let that = this
    //初始化信息
    this.setData({
      Wechat:userData.wechat,
      QQ:userData.qq,
      PhoneNumber:userData.phoneNumber
    })
    wx.request({
      url: getApp().globalData.api + "/common/tagGet",
      method:"GET",
      data:{},
      success(res){
        let Reslist = []
        for (let index = 0; index < res.data.data.length; index++) {
          Reslist.push({text:res.data.data[index].tag_name,value:res.data.data[index].id})
        }
        Reslist.push({text:"请选择",value:Reslist[Reslist.length - 1].value + 1})
        that.setData({
          option1:Reslist,
          value1:Reslist[Reslist.length - 1].value + 1
        })
      },
      fail(err){
        console.log(err);
      }
    })
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