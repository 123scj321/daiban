// pages/user/question-reback/index.js
const handler = require("../../../style/function.js")
let img = handler.userImg;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userAdvise: {
      value: "",
      cursor: 0,
    },
  },
  // 用户意见输入
  userInput: function (e) {
    let _value = e.detail.value;
    let _cursor = e.detail.cursor;
    this.setData({
      userAdvise: {
        value: _value,
        cursor: _cursor
      }
    });
  },
  // submit_btn 匿名提交
  submit_btn:function(e){
    wx.showLoading({
    })
    wx.showToast({
      title: '提交成功',
      icon:"none",
      duration: 5000,
      success:function(){
        handler.redirectTo("../personal-information/index");
      },
      
    })
    
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