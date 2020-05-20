//app.js
App({
  onLaunch: function () {

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    }),

    // 
    wx.db = {};
    wx.db.url = (url) => {
      return `https://douban-api.uieee.com/${url}`;
    };
    this.initToast();

    const info = wx.getSystemInfoSync();
    wx.db.statusBarHeight = info.statusBarHeight;
    if (info.platform == 'android') {
      wx.db.navBarHeight = 48;
    } else {
      wx.db.navBarHeight = 44;
    };

  };

  // 初始化toast
  initToast: function () {
    const toastTypeNormal = 0;
    const toastTypeSuccess = 1;
    const toastTypeError = 2;

    let commonToast = (title, type, duration = 1500) => {
      let options = {
        title: title,
        icon: 'none',
        duration: duration
      };
      if (type == toastTypeSuccess) {
        options.icon = 'success';
      } else if (type == toastTypeError) {
        options.image = '/assets/imgs/upsdk_cancel_normal.png';
      }
      wx.showToast(options);
    };
    
    // 可以供外部调用的方法
    wx.db.toast = (title, duration) => {
      commonToast(title, toastTypeNormal, duration);
    };
    wx.db.toastSuccess = (title, duration) => {
      commonToast(title, toastTypeSuccess, duration);
    };
    wx.db.toastError = (title, duration) => {
      commonToast(title, toastTypeError, duration);
    };
  };

  globalData: {
    userInfo: null
  };
})