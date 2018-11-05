// pages/server/authority-second/index.js
const handler = require("../../../style/function.js")
let img = handler.serverImg;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: handler.serverImg,
    companyName:'',
    address:'',
    businessmen:'',
    Idcard:'',
    authority:'',
    relativeName:'',
    relativePhone:''
  },
  /**
   * 表单验证 
   */
  // 获取企业名称
  get_companyName: function (event){
    var that = this
    that.setData({
      companyName: event.detail.value
    })
    handler.regTest(event.detail.value, "请输入您的企业名称")
  },
  // 所在地区
  get_address: function (event) {
    var that = this
    that.setData({
      address: event.detail.value
    })
    handler.regTest(event.detail.value, "请输入所在地区")
  },
  // 法人姓名
  get_businessmen: function (event) {
    var that = this
    that.setData({
      businessmen: event.detail.value
    })
    handler.regTest(event.detail.value, "请输入法人姓名")
  },
  // 法人身份证
  get_Idcard: function (event) {
    var that = this
    that.setData({
      Idcard: event.detail.value
    })
    handler.IdCardTest(event.detail.value)
  },
  // 上传图片
  get_upload_image: function () {
    var that = this
    handler.uploadImageHandler((res)=>{
      // 模拟图片
      that.setData({
        authority: img +"notice-avatar.png"
      })
    })
  },
  // 删除图片
  delete_upload_image:function(){
    var that = this
    wx.showModal({
      content:'是否删除图片',
      success:function(res){
        if(res.confirm){
          that.setData({
            authority: ''
          })
        }
      }
    })
  },
  // 获取联系人
  get_relativeName: function (event){
    var that = this
    that.setData({
      relativeName: event.detail.value
    })
    handler.regTest(event.detail.value, "请输入联系人")
  },
  // 获取联系电话
  get_relativePhone: function (event) {
    var that = this
    that.setData({
      relativePhone: event.detail.value
    })
    handler.regTest(event.detail.value, "请输入联系电话",/^1[3456789]\d{9}$/)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  getPhoneLogin:function(e){
    const { companyName,
      address,
      businessmen,
      Idcard,
      authority,
      relativeName,
      relativePhone}=this.data;
    console.log(companyName,
      address,
      businessmen,
      Idcard,
      authority,
      relativeName,
      relativePhone);
    
    var userInfo = wx.getStorageSync("user_authority");
    const { name, phone,verificationcode} = userInfo;
    var testCompanyName = handler.regTest(companyName, "请输入您的企业名称");
    var testAddress = handler.regTest(address, "请输入所在地区地址");
    var testBusinessmen = handler.regTest(businessmen, "请输入法人姓名");
    var testIdcard = handler.regTest(Idcard, "请输入身份证号码");
    var testAuthority = handler.regTest(authority, "请上传企业营业执照");
    var testRelativeName = handler.regTest(relativeName, "请输入联系人");
    var testCompanyName = handler.regTest(relativePhone, "请输入联系电话");
    var allTest = testCompanyName && testAddress && testBusinessmen && testIdcard && testAuthority && testRelativeName && testCompanyName;
    if(allTest){
      wx.setStorageSync("user_authority", { name, phone, verificationcode,address,businessmen,Idcard,authority,relativeName,relativePhone})
      handler.redirectTo("../index/index");
    }else{
      var testCompanyName = handler.regTest(companyName, "请输入您的企业名称");
      var testAddress = handler.regTest(address, "请输入所在地区地址");
      var testBusinessmen = handler.regTest(businessmen, "请输入法人姓名");
      var testIdcard = handler.regTest(Idcard, "请输入身份证号码");
      var testAuthority = handler.regTest(authority, "请上传企业营业执照");
      var testRelativeName = handler.regTest(relativeName, "请输入联系人");
      var testCompanyName = handler.regTest(relativePhone, "请输入联系电话");
    }
    // 
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