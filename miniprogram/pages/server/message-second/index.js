// pages/server/message-second/index.js
// order_status 订单状态 0待接单 1已接单 2已完成
const handler = require("../../../style/function.js")
let img = handler.userImg;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    order_status:0
  },
  // get_order 订单状态 0待接单
  get_order:function(e){
    this.setData({ order_status: 1})
  },
  // 订单状态 1 进行中-
  finish_order: function (e) {
    this.setData({ order_status: 2 })
  },
  // get_order 订单状态 0待接单
  finished_order: function (e) {
    handler.intoPageHandler("../order/index")
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