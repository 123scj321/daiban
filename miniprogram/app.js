//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  }
    , getUserInfo: function(cb) {
      var that = this
      if (this.globalData.userInfo) {
        typeof cb == "function" && cb(this.globalData.userInfo)
      } else {
        //调用登录接口
        wx.login({
          success: function () {
            wx.getUserInfo({
              success: function (res) {
                that.globalData.userInfo = res.userInfo
                typeof cb == "function" && cb(that.globalData.userInfo)
              }
            })
          }
        })
      }
    }
  //get locationInfo
  , getLocationInfo: function(cb) {
      var that = this;
      if (this.globalData.locationInfo) {
        cb(this.globalData.locationInfo)
      } else {
        wx.getLocation({
          type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
          success: function (res) {
            that.globalData.locationInfo = res;
            cb(that.globalData.locationInfo)
          },
          fail: function () {
            // fail
          },
          complete: function () {
            // complete
          }
        })
      }
    }

  , globalData: {
      userInfo: null,
      locationInfo: null
    }
})
