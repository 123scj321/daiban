// pages/server/message-first/index.js
const handler = require("../../../style/function.js")
let img = handler.userImg;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: handler.serverImg,
    notice: [{ id: 0, style: 0 }, { id: 0, style: 0 }, { id: 0, style: 1 }, { id: 0, style: 0 }, { id: 0, style: 0 }, { id: 0, style: 0 }, { id: 0, style: 0 },]
  },
  //formSubmit 页面跳转
  formSubmit: function (e) {
    handler.intoPageHandler(e.currentTarget.dataset.url)
  },
  //底部导航
  footer_handler: function (e) {
    handler.redirectTo(e.currentTarget.dataset.url)
  },
  // 下拉刷新
  onReachBottom: function () {
    wx.showLoading({})
    let { notice } = this.data;
    let that = this;
    setTimeout(function () {
      notice.push({ id: 0, style: 0 }, { id: 0, style: 0 }, { id: 0, style: 1 })
      that.setData({ notice });
      wx.hideLoading()
    }, 5000)
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  }

})