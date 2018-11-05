// pages/server/order/index.js
const handler = require("../../../style/function.js")
let img = handler.userImg;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: handler.userImg,
    currentItemId: 0,
    order_data: [
      { title: "待接单", message: [{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 },] },
      { title: "已完成", message: [{ id: 1 },] },
    ]
  },
  // 选择按钮
  selectSwiper: function (e) {
    console.log(e.currentTarget.dataset.listid);
    this.setData({ currentItemId: e.currentTarget.dataset.listid })
  },
  // 下拉刷新
  refreshData: function () {
    wx.showLoading({
    })
    let { order_data, currentItemId } = this.data;
    let that = this;
    setTimeout(function () {
      order_data[currentItemId].message.push({ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 })
      that.setData({ order_data })
      wx.hideLoading()
    }, 5000)
  },
  // into_next_page 页面跳转
  into_next_page: function (e) {
    handler.intoPageHandler(e.currentTarget.dataset.url)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})