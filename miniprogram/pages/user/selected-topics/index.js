// pages/user/selected-topics/index.js
const handler = require("../../../style/function.js")
let img = handler.userImg;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: handler.userImg,
    currentItemId: "0",
    select_topics: [
      { title: "推荐", 
        data: [
          { id: "001" }, 
          { id: "001" }, 
          { id: "001" }, 
          { id: "001" }, 
          { id: "001" }, 
          { id: "001" },
          { id: "001" },
          { id: "001" },
          { id: "001" },
          { id: "001" },
          { id: "001" },
          ]
      },
      {
        title: "企业服务",
        data: [
          { id: "001" },
          { id: "001" },
          { id: "001" },
        ]
      },
      {
        title: "创业必备",
        data: [
          { id: "001" },
          { id: "001" },
          { id: "001" },
          { id: "001" },
          
        ]
      },
      {
        title: "家具生活",
        data: [
          { id: "001" },
        ]
      },
    ],
  },
  // 列表筛选按钮 selectSwiper
  selectSwiper:function(e){
    this.setData({ currentItemId: e.currentTarget.dataset.listid})
  },
  // 刷新数据
  changeSwiper:function(e){
    console.log(e)
  },
  // 下拉刷新
  refreshData:function(){
    wx.showLoading({})
    setTimeout(function(){wx.hideLoading()},5000);
  },
  // 进入精选详情页
  //formSubmit 页面跳转
  formSubmit: function (e) {
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