// pages/server/evaluate/index.js
const handler = require("../../../style/function.js")
let img = handler.userImg;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: handler.userImg,
    evaluate: [{ id: "001" }, { id: "001" }, { id: "001" }, { id: "001" }, { id: "001" }, { id: "001" }, { id: "001" }, { id: "001" },],
    currentId:0
  },
  // 评价
  selectTimeShowTimeHandler:function(e){
    console.log(this.data.currentId)
    console.log(e.currentTarget.dataset.id)
    this.setData({ currentId: e.currentTarget.dataset.id })
  },
  /**
     * 下拉刷新
     */
  onReachBottom: function () {
    const { evaluate}=this.data;
    const that=this;
    wx.showLoading({})
    evaluate.push({ id: "001" }, { id: "001" }, { id: "001" }, { id: "001" })
    setTimeout(()=>{
      wx.hideLoading();
      that.setData({ evaluate })
    },5000)
    
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