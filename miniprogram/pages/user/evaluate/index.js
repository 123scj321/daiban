// pages/user/evaluate/index.js
const handler = require("../../../style/function.js")
let img = handler.userImg;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: handler.userImg,
    currentItemId: "0",
    evaluate: { 
      server: 3, 
      server_star:[img + "big-star.png", img + "big-star.png", img + "big-star.png", img + "big-star-01.png", img + "big-star-01.png",]
      ,busness_confidence:3,
      busness_confidence_star: [img + "small-star.png", img + "small-star.png", img + "small-star.png", img + "small-star-01.png", img + "small-star-01.png",],
      business_server:3,
      business_server_star: [img + "small-star.png", img + "small-star.png", img + "small-star.png", img + "small-star-01.png", img + "small-star-01.png",],
      },
    context:""
  },
  // 服务事件 星星选择事件
  server_star_handler:function(e){
    const { evaluate}=this.data;
    var id=e.currentTarget.dataset.num;
    var type = e.currentTarget.dataset.type;
    var server_star=[];
    for(var i=0;i<5;i++){
      if(id>=i){
        if (type == "server") {
          server_star[i] = img + "big-star.png";
        }else{
          server_star[i] = img + "small-star.png";
        }
      }else{
        if (type == "server") {
          server_star[i] = img + "big-star-01.png";
        } else {
          server_star[i] = img + "small-star-01.png";
        }
      }
    }
    if (type == "server"){
      evaluate.server_star = server_star;
      this.setData({ evaluate, server: ++id })
    } else if (type =="busness_confidence"){
      evaluate.busness_confidence_star = server_star;
      this.setData({ evaluate, busness_confidence: ++id })
    } else if (type == "business_server") {
      evaluate.business_server_star = server_star;
      this.setData({ evaluate, business_server: ++id })
    }
  },
  // 获取补充信息
  get_context:function(e){
    console.log(e);
    this.setData({ context:e.detail.value})
  },
  submit_btn:function(e){
    const { evaluate, context}=this.data;
    console.log(context, evaluate);
    wx.showToast({
      title: '提交成功',
      icon:"none",
      success:function(){
        handler.redirectTo("../index/index")
      },
      fail:function(){}
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