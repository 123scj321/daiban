// pages/server/news/index.js
const handler = require("../../../style/function.js")
let img = handler.userImg;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: handler.serverImg,
    data: [
      { id: "001", title:"订单被评为五星好评，奖励10成长值。",type:0},
      { id: "001", title: "有用户留言，请尽快回复。",type: 1}, 
      { id: "001", title: "有用户留言，请尽快回复。", type: 1},
      { id: "001", title: "订单被评为五星好评，奖励10成长值。", type: 0 },
      { id: "001", title: "有用户留言，请尽快回复。", type: 1 },
      { id: "001", title: "有用户留言，请尽快回复。", type: 1 },
      { id: "001", title: "订单被评为五星好评，奖励10成长值。", type: 0 },
      { id: "001", title: "有用户留言，请尽快回复。", type: 1 },
      { id: "001", title: "有用户留言，请尽快回复。", type: 1 },
      { id: "001", title: "订单被评为五星好评，奖励10成长值。", type: 0 },
      { id: "001", title: "有用户留言，请尽快回复。", type: 1 },
      { id: "001", title: "有用户留言，请尽快回复。", type: 1 }
          ]

  },
  /**
     * 下拉刷新
     */
  onReachBottom: function () {
    const { data } = this.data;
    const that = this;
    wx.showLoading({})
    data.push({ id: "001" }, { id: "001" }, { id: "001" }, { id: "001" })
    setTimeout(() => {
      wx.hideLoading();
      that.setData({ data })
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