// pages/user/company-detail/index.js
const app = getApp()
const handler = require("../../../style/function.js")
let img = handler.userImg;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: handler.userImg,
    agent_project: [{ id: "1", title: "公司注册", status: false }, { id: "2", title: "代理记账", status: false }, { id: "3", title: "其他", status: false }],
    showAppointment:true,
    appointment_left:-750,
    name:"",
    phone:"",
    address:"",
    verificationcode: '',
    verificationcodeTest: false,
    gettingCode: true,
    sendtxt:"60s",
    message:"",
    agent_projects:[],
    collect:false
  },
  // into_next_page 页面跳转
  into_next_page: function (e) {
    handler.intoPageHandler(e.currentTarget.dataset.url)
  },
  // 收藏按钮
  collect_btn:function(){
    const { collect}=this.data;
    if (!collect) {
      wx.showLoading({
        title: '已收藏',
        duration: 5000,
        icon: "none"
      })
    } else {
      wx.showToast({
        title: '已取消',
        duration: 5000,
        icon: "none"
      })
    }
    this.setData({ collect:!collect})
    
  },
  // 联系商家 按钮
  callPhoneHandler:function(e){
    handler.callPhoneHandler(e.currentTarget.dataset.phone)
  },
  // 打开留言
  open_message:function(e){
    this.setData({ showAppointment: false, appointment_left:0})
  },
  // 取消留言
  cancleAppointment:function(e){
    this.setData({ showAppointment: true, appointment_left: -750 })
  },
  // 获取用户名
  get_name: function (e) {
    var test_name = handler.regTest(e.detail.value, "请输入姓名");
    test_name && this.setData({ name: e.detail.value });
  },
  // 获取电话号码
  get_phone: function (e) {
    console.log(e.detail.value)
    var test_phone = handler.regTest(e.detail.value, "请输入正确的电话号码格式", /^1\d{10}$/);
    test_phone && this.setData({ phone: e.detail.value });
  },
  // phoneTest 电话号码验证
  phoneTest: function (params) {
    if (params == '' || !/^1\d{10}$/.test(params)) {
      wx.showToast({
        title: '请输入正确的电话号码格式',
        icon: "none"
      })
      this.setData({
        phoneTest: false,
      });
      return false;
    } else {
      this.setData({
        phoneTest: true,
      });
      return true;
    }
  },
  // 获取地址
  get_address: function (e) {
    var test_address = handler.regTest(e.detail.value, "请输入地址");
    test_address && this.setData({ address: e.detail.value });
  },
  // 发送验证码
  sendcode: function () {
    var that = this;
    console.log(this.data.phone);
    console.log(this.phoneTest(this.data.phone))
    this.phoneTest(this.data.phone) && this.countDown()
  },

  //倒计时 倒数
  countDown: function () {
    var that = this;
    that.data.gettingCode = false;
    this.setData({ gettingCode:false})
    var seconds = 59;
    var countTimer = setInterval(function () {
      that.setData({
        sendtxt: seconds + "s"
      })
      seconds--;
      if (seconds <= 0) {
        countTimer = clearInterval(countTimer);
        that.setData({
          sendtxt: '获取验证码'
        })
        that.data.gettingCode = true;
        that.setData({ gettingCode: true })
      }
    }, 1000);
  },
  verificationinput: function (e) {
    this.setData({
      verificationcode: e.detail.value,
    });
    this.verificationTest(e.detail.value);
  },
  verificationTest: function (params) {
    if (params == null) {
      wx.showToast({
        title: '请输入验证码',
        icon: "none"
      })
      return;
    } else {
      this.setData({
        verificationcodeTest: true,
      });
    }
  },
  // 代办项目选择
  choose_project:function(e){
    const id = e.currentTarget.dataset.id;
    const { agent_project}=this.data;
    var index=-1;
    for (var i = 0; i < agent_project.length;i++){
      console.log(agent_project[i]);
      if (agent_project[i].status == true){
        wx.showToast({
          title: '你已经选择了',
          icon:"none"
        })
      } else{
        index++;
      }
      
    }
    console.log(agent_project[id], id)
    if(index==2){
      agent_project[id].status = true;
      this.setData({ agent_projects: { status: true, message: agent_project[id].title}})
    } else if (agent_project[id].status == true) {
      agent_project[id].status = false;
      this.setData({ agent_projects: { status: false, message: agent_project[id].title }})
    }
    this.setData({ agent_project})
  },
  // 获取留言内容
  get_message:function(e){
    var test_message = handler.regTest(e.detail.value, "请输入地址");
    test_message && this.setData({ message: e.detail.value });
  },
  // 提交按钮
  submit_btn:function(){
    const { name, phone, message, address, agent_projects}=this.data;
    var choose_project = this.choose_project;
    var name_test = handler.regTest(name, "请输入姓名")
    
    var phone_test = handler.regTest(phone, "请输入电话号码", /^1\d{10}$/);
    var address_test = handler.regTest(address, "请输入地址");
    var message_test = handler.regTest(message, "请输入简介");
    agent_projects.status &&handler.showToast("请选择代办项目");
    var test_all = name_test && phone_test && address_test && message_test ;
    if (test_all){
      handler.intoPageHandler("../order-detail/index")
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