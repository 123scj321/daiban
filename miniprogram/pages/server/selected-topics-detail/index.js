// pages/user/selected-topics-detail/index.js
const handler = require("../../../style/function.js")
let img = handler.userImg;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: handler.userImg,
    currentItemId: "0",
    
    zan: {
      zan_img: img + "zan.png",
      zan_count: 200,
      zan_active: false,
      scale: 1,
    }
  },
  // 点赞按钮 zan-btn
  zan_btn:function(){
    var { zan } = this.data;
    if (!zan.zan_active){
      zan = { scale: 1.1, zan_img: img + "zan-01.png", zan_count: ++zan.zan_count, zan_active: true };
      this.setData({ zan })
    }
    
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