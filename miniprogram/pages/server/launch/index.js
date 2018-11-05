// pages/server/launch/index.js
const app = getApp()
const handler = require("../../../style/function.js")
let img = handler.serverImg;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    serverTitle:'',
    serverStyle:'',
    address:'',
    companyResume:'',
    companyResumeImg:'',
    imgUrl: handler.serverImg,
  },
  // 获取服务标题
  get_serverTitle: function (event) {
    var that = this
    that.setData({
      serverTitle: event.detail.value
    })
    handler.regTest(event.detail.value, "请输入您的服务标题")
  },
  // 获取服务区域
  get_address: function (event) {
    var that = this
    that.setData({
      address: event.detail.value
    })
    handler.regTest(event.detail.value, "请输入所在地区")
  },
  // 获取企业介绍
  get_companyResume: function (event) {
    var that = this;
    that.setData({
      companyResume: event.detail.value
    })
    handler.regTest(event.detail.value, "请输入企业介绍...")
  },
  
  // 上传图片
  get_upload_image: function () {
    var that = this
    handler.uploadImageHandler((res) => {
      // 模拟图片
      that.setData({
        companyResumeImg: img + "notice-avatar.png"
      })
    })
  },
  // 删除图片
  delete_upload_image: function () {
    var that = this
    wx.showModal({
      content: '是否删除图片',
      success: function (res) {
        if (res.confirm) {
          that.setData({
            companyResumeImg: ''
          })
        }
      }
    })
  },
  // 发布信息
  launch_handler: function (e) {
    const { serverTitle,
      serverStyle,
      address,
      companyResume,
      companyResumeImg} = this.data;
    console.log(serverTitle,
      serverStyle,
      address,
      companyResume,
      companyResumeImg);
    var testServerTitle = handler.regTest(serverTitle, "请输入您的服务标题");
    var testServerStyle = handler.regTest(serverStyle, "请选择服务种类");
    var testAddress = handler.regTest(address, "请输入您的服务区域");
    var testCompanyResume = handler.regTest(companyResume, "请输入您的企业介绍");
    var allTest = testServerTitle && testServerStyle && testAddress && testCompanyResume;
    if (allTest) {
      wx.setStorageSync("launch_message", {serverTitle,serverStyle,address,companyResume,companyResumeImg})
      handler.redirectTo("../index/index");
    } else {
      var testServerTitle = handler.regTest(serverTitle, "请输入您的服务标题");
      var testServerStyle = handler.regTest(serverStyle, "请输入所在地区地址");
      var testAddress = handler.regTest(address, "请输入法人姓名");
      var testCompanyResume = handler.regTest(companyResume, "请输入您的服务区域");
    }
    // 
  },
  //formSubmit 页面跳转
  formSubmit: function (e) {
    handler.intoPageHandler(e.currentTarget.dataset.url)
  },
  //底部导航
  footer_handler: function (e) {
    handler.redirectTo(e.currentTarget.dataset.url)
  }, 
  // 获取类型
  get_style:function(){
    var styles = wx.getStorageSync("launch_style");
    var html = '';
    for (var i = 0; i < styles.length; i++) {
      if (i < styles.length-1){
        html += styles[i].value + ','
      }else{
        html += styles[i].value 
      }
      
    }
      console.log(html)
    this.setData({ serverStyle: html })
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
    this.get_style();
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