Page({
  data: {
    Avatar:"",
    Nickname:"",
    Username:"",
    CampusName:"",
    PhoneNumber:"",
    Wechat:"",
    Qq:"",
  },
  method:{
  },
  confirmInformation:function () {
    let that = this
    let updateDatas =  {
      nickname:this.data.Nickname,
      campusName:this.data.CampusName,
      phoneNumber:this.data.PhoneNumber,
      wechat:this.data.Wechat,
      qq:this.data.Qq,
      username:this.data.Username,
      wechatId:"", 
      authority:0,  
    }
    if(wx.getStorageSync('uidType') == 0){
      updateDatas.username = wx.getStorageSync('uid')
    }else{
      updateDatas.wechatId = wx.getStorageSync('uid')
    }
    if(updateDatas.CampusName != ""){
      updateDatas.authority =  1
    }
    wx.request({
      url: getApp().globalData.api + "/api/updateUserInfo",
      method:"PUT",
      data:updateDatas,
      success(res){
          if(res.data.code == 0){
            wx.showModal({
              title: '提示',
              content: '用户信息修改成功',
              showCancel: false, // 不显示取消按钮，只显示确认按钮
              confirmText: '确认', // 设置确认按钮文字
            });
            wx.request({
              url: getApp().globalData.api + '/api/userInfoGet',
              method:"GET",
              data:{
                token:wx.getStorageSync('token')
              },
              success(res){
                let datas = res.data.data
                if (res.data.code == 0){
                  //将用户信息存入全局变量
                  getApp().globalData.userdata = datas
                  that.setData({
                    NickName: datas.nickname == "" ? datas.username : datas.nickname,
                    Avatar:datas.avatar,
                    Username:datas.username,
                    CampusName:datas.campusName == "" ? "未加入校园" : datas.campusName,
                    PhoneNumber:datas.phoneNumber,
                    Wechat:datas.wechat,
                    Qq:datas.qq
                  })
                } else{
                  //token 过期需要重新登录
                  wx.showModal({
                    title: '提示',
                    content: '用户身份信息已过期，请重新登录',
                    showCancel: false, // 不显示取消按钮，只显示确认按钮
                    confirmText: '确认', // 设置确认按钮文字
                    success(res) {
                      if (res.confirm) {
                        wx.clearStorageSync('token');
                        wx.redirectTo({
                          url: '../login/login'  // 替换为你的登录页面路径
                        });
                      }
                    }
                  });
                }
              },
              fail(err){
                console.error(err);
              }
            })
          }else{
            wx.showModal({
              title: '提示',
              content: res.data.msg,
              showCancel: false, // 不显示取消按钮，只显示确认按钮
              confirmText: '确认', // 设置确认按钮文字
            });
          }
      },
      fail(err){
          console.log(err);
      }
    })
  },
  showInput: function () {
    this.setData({
      isFocus: true
    });
  },

  // 输入内容变化时触发
  inputChange: function (e) {
    const field = e.currentTarget.dataset.field; // 获取 data-field 的值
    const value = e.detail.value; // 获取输入的内容
    this.setData({
      [field]: value // 动态设置 data 中对应的字段
    });
  },
  // 输入框失去焦点时触发，切换回非输入状态
  inputBlur: function () {
    this.setData({
      isFocus: false
    });
  },
  //选择图片
  selectImage: function () {
    let that = this;
    wx.chooseMedia({
      count: 1,
      mediaType:['image'],
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        that.setData({
          avatarUrl: res.tempFiles[0].tempFilePath
        });
       that.uploadImage(res.tempFiles[0].tempFilePath);
      }
    });
  },
  uploadImage: function (filePath) {
    let that = this
    wx.uploadFile({
      url: getApp().globalData.api+"/api/updateAvatar",
      filePath:filePath ,
      name:"imageKey",
      formData: {
        'id': getApp().globalData.userdata.id , // 额外的表单数据
      },
      success: function (res) {
        wx.showModal({
          title: '提示',
          content: '头像上传成功',
          showCancel:false,
          confirmText:"确定"
        })
        wx.request({
          url: getApp().globalData.api + '/api/userInfoGet',
          method:"GET",
          data:{
            token:wx.getStorageSync('token')
          },
          success(res){
            let datas = res.data.data
            console.log(datas);
            if (res.data.code == 0){
              //将用户信息存入全局变量
              getApp().globalData.userdata = datas
              that.setData({
                Avatar:datas.avatar,
              })
            } else{
              wx.showModal({
                title: '提示',
                content: '用户身份信息已过期，请重新登录',
                showCancel: false, // 不显示取消按钮，只显示确认按钮
                confirmText: '确认', // 设置确认按钮文字
                success(res) {
                  if (res.confirm) {
                    wx.clearStorageSync('token');
                    wx.redirectTo({
                      url: '../login/login'  // 替换为你的登录页面路径
                    });
                  }
                }
              });
            }
          },
          fail(err){
            console.error(err);
          }
        })
      },
      fail: function (err) {
        // 上传失败后的处理逻辑
        console.log("upload unsusscess");
        console.log(err);
      }
    });
  },
  onLoad(options) {
    let datas = getApp().globalData.userdata
      this.setData({
        Avatar:datas.avatar,
        Nickname:datas.nickname,
        Username:datas.username,
        CampusName:datas.campusName,
        PhoneNumber:datas.phoneNumber,
        Wechat:datas.wechat,
        Qq:datas.qq,
      })
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