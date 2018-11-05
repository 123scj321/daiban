// pages/server/member/index.js
//0 未登录 1 已登录
const app = getApp()
const handler = require("../../../style/function.js")
let img = handler.serverImg;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: handler.serverImg,
    member_message:{
      grows:0,
      avatar: img +'avatar-02.png',
      title:'西安比邻财务管理有限公司',
      time:'暂未获得会员',
      rank:1
    },
    VIP_data: [
      { month: 3, money: "50.00", old_money: "", status: true }, 
      { month: 6, money: "136.00", old_money: "150", status: false },
      { month: 12, money: "228.00", old_money: "240", status: false }
      ],
    status:false
  },
// 签到事件
  sign_handler:function(){
    var that=this;
    that.setData({
      status: true,
      member_message: {
      grows: 40,
      avatar: img + 'avatar-01.png',
      title: '西安比邻财务管理有限公司',
      time: '2018-07-18到期',
      rank: 1
      }
    })
  },
  // 选择会员充值
  choose_VIP:function(e){
    var id=e.currentTarget.dataset.id;
    const { VIP_data}=this.data;
    for (var i = 0; i < VIP_data.length;i++){
      if(i!=id){
        VIP_data[i].status=false
      }else{
        VIP_data[i].status = true
      }
    }
    this.setData({ VIP_data})
    console.log(VIP_data)
  },
  //formSubmit 页面跳转
  formSubmit: function (e) {
    handler.intoPageHandler(e.currentTarget.dataset.url)
  },
  //底部导航
  footer_handler: function (e) {
    handler.redirectTo(e.currentTarget.dataset.url)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    if (options.status=="true"){
      this.sign_handler()
    }
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