// pages/user/news/index.js
const handler = require("../../../style/function.js")
let img = handler.userImg;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: handler.userImg,
    data: [{ id: "001" }, { id: "001" }, { id: "001" }, { id: "001" }, { id: "001" }, { id: "001" }, { id: "001" } ,{ id: "001" }, { id: "001" }]
  },
  // 下拉刷新
  onReachBottom: function () {
    wx.showLoading({})
    let { data } = this.data;
    let that = this;
    setTimeout(function () {
      data.push({ id: "001" }, { id: "001" }, { id: "001" }, { id: "001" })
      that.setData({ data });
      wx.hideLoading()
    }, 5000)
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

  }
})