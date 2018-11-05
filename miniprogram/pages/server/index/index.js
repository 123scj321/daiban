// pages/server/index/index.js
const app = getApp()
const handler = require("../../../style/function.js")
let img = handler.userImg;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: handler.serverImg,
    news_list: [{ id: 0 }, { id: 0 }, { id: 0 }, { id: 0 },],
    notice: [{
      id: 0, title: "祝贺西安华正财务有限公司本月完成300单！" }, 
      { id: 0, title: "祝贺西安华正财务有限公司本月完成300单！"}, 
      { id: 0, title: "祝贺西安华正财务有限公司本月完成300单！"}, 
      { id: 0, title: "祝贺西安华正财务有限公司本月完成300单！" },],
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
    let { news_list } = this.data;
    let that = this;
    setTimeout(function () {
      news_list.push({ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 })
      that.setData({ news_list });
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