// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId:"2020220586",
    userPwd:"123456",
    api:'',
    campusName:[],
    selectedCampus:"",
    selectedItem:"未选择院校"
  },
  method:{
  },
  //监听用户选择了哪一个学校
  onSelectedItemChange(e) {
    this.setData({
      selectedItem: e.detail
    });
  },
  // 监听用户输入用户名,
  onUserIdInput(event) {
    this.setData({
      userId: event.detail
    });
  },
  // 监听用户输入密码
  onUserPwdInput(event) {
    this.setData({
      userPwd: event.detail
    });
  },
  //账号登录
  goIndex:function(){
    let requestData = {
      username: this.data.userId,
      password: this.data.userPwd,
      campus: this.data.selectedItem
    };
      //发送登录请求
  wx.request({
    url:  this.data.api + "/api/login",
    method: 'POST',
    data: requestData,
    header: {
      'content-type': 'application/json' // 默认值
    },
    success(res) {
      // 处理登录成功的情况
      //console.log(res.data);
      wx.setStorageSync('token', res.data.data);
      if (res.data.code === 0) {
        // 跳转到下一个页面，并传递用户userId作为参数
        wx.setStorageSync('username', requestData.username);
        wx.switchTab({
          url: '../index/index',
        })
      } else {
        // 处理登录失败的情况，例如提示用户错误信息
        wx.showToast({
          title: '登录失败，请检查用户名和密码和归属校园',
          icon: 'none',
          duration: 2000
        });
      }
    },
    fail(err) {
      // 处理请求失败的情况，例如网络错误
      wx.showToast({
        title: '登录请求失败，请稍后重试',
        icon: 'none',
        duration: 2000
      });
      console.error('登录请求失败', err);
    }
  });
  },
  //微信登录
  wxLogin:function(data){
    wx.login({
      success: (res) => {
        let URL = 'https://api.weixin.qq.com/sns/jscode2session?appid=wx1148dd8990fe6927&secret=4b33d0b1f6179dcd622dc171b3c97536&js_code='+res.code+'&grant_type=authorization_code'
        let that = this
        wx.request({
          url: URL,
          method: 'POST',
          data: {
            code: res.code
          },
          success: function(response) {
            const openid = response.data.openid;
            if (res.code){
              let requestData = {
                nickname: data.nickName,
                avatar: data.avatarUrl,
                wechat: openid
              };
               wx.request({
                url: that.data.api + "/api/login",
                data: requestData,
                method:'POST',
                success(res){
                  wx.setStorageSync('token', res.data.data); 
                  if (res.data.code === 0) {
                    // 跳转到下一个页面，并传递用户userId作为参数
                    wx.setStorageSync('nickName', requestData.nickname);
                    wx.setStorageSync('avatar', requestData.avatar);
                    wx.switchTab({
                      url: '../account/account',
                    })
                  } else {
                    wx.showToast({
                      title: '登录失败，请重新授权',
                      icon: 'none',
                      duration: 2000
                    });
                  }
                },
                fail(err) {
                  console.error('登录请求失败', err);
                }
              })
             }
          }
        });
      },
    })
  },
  //授权
  getUserProfile: function () {
    wx.getUserProfile({
      desc: '用于完善个人信息',  // 描述为何需要获取用户信息
      success: (res) => {
        this.wxLogin(res.userInfo);  // 例如这里可以调用登录逻辑
      },
      fail: (err) => {
        console.log('用户授权失败:', err);
      }
    });
  },
 //页面启动时
  onLoad() {
    // 设置 API 地址
    this.setData({
      api: getApp().globalData.api
    });
    // 发起请求
    wx.request({
      url: this.data.api + '/api/campus_get',  // 请求地址
      method: 'GET',
      data: {},
      success: (res) => {  // 使用箭头函数，保证 this 是正确的
        // 检查请求返回的数据
        if (res.data && res.data.data) {
          // 设置 campusName 数据
          this.setData({
            campusName: res.data.data
          });
        } else {
          console.log("请求数据格式错误");
        }
      },
      fail: (err) => {
        console.log("请求失败", err);
      }
    });
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