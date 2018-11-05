// pages/server/launch-style/index.js
const app = getApp()
const handler = require("../../../style/function.js")
let img = handler.userImg;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: handler.userImg,
    business_server: [
      { title: "代理记账",status:false },
      { title: "验资", status: false },
      { title: "财务审计", status: false},
      { title: "资产评估", status: false },
      { title: "税务咨询", status: false},
      { title: "工程报价", status: false},
      { title: "财税疑难", status: false},
      { title: "纳税申报", status: false},
    ],
    society_agent: [
      { title: "社会保险申报", status: false},
      { title: "社会保险缴纳", status: false},
      { title: "养老保险转移", status: false},
      { title: "医保转移", status: false },
    ],
    project_tax: [
      { title: "验资", status: false},
      { title: "财务审计", status: false},
      { title: "工程报价", status: false},
      { title: "资产评估", status: false},
      { title: "税务咨询", status: false},
      { title: "财税疑难", status: false },
      { title: "纳税申报", status: false },
    ],
    vehicle_tax: [
      { title: "过户" },
      { title: "汽车年检", status: false},
      { title: "代办上牌", status: false },
      { title: "违章咨询", status: false },
      { title: "异地验车", status: false},
      { title: "外迁提档", status: false},
    ],
    asset_turn: [
      { title: "建筑资质", status: false},
      { title: "劳务派遣", status: false },
      { title: "药食资质", status: false},
      { title: "环保水利", status: false},
      { title: "机电资质", status: false},
      { title: "教育资质", status: false },
      { title: "电力许可", status: false },
      { title: "文化资质", status: false },
      { title: "安防资质", status: false },
      { title: "信息通信", status: false },
    ],
    outbound_inbound: [
      { title: "护照", status: false },
      { title: "签证", status: false},
      { title: "港澳台通行证", status: false},
      { title: "入台证", status: false },
      { title: "边境证", status: false},
    ],
    style:[]
  },
// 选择类型
  choose_style:function(e){
    const { id,type,value} = e.currentTarget.dataset;
    const { business_server, society_agent, project_tax, vehicle_tax, asset_turn, outbound_inbound, style}=this.data;
    if (style.length<5){
      if (type == "business_server") {
        business_server[id].status = true;
        style.push({ id, type, value})
        this.setData({ business_server, style })
      } else if (type == "society_agent") {
        society_agent[id].status = true;
        style.push({ id, type, value })
        this.setData({ society_agent, style })
      } else if (type == "project_tax") {
        project_tax[id].status = true;
        style.push({ id, type, value })
        this.setData({ project_tax, style })
      } else if (type == "vehicle_tax") {
        vehicle_tax[id].status = true;
        style.push({ id, type, value })
        this.setData({ vehicle_tax, style })
      } else if (type == "asset_turn") {
        asset_turn[id].status = true;
        style.push({ id, type, value })
        this.setData({ asset_turn, style })
      } else if (type == "outbound_inbound") {
        outbound_inbound[id].status = true;
        style.push({ id, type, value })
        this.setData({ outbound_inbound, style })
      }
    }else{
      wx.showToast({
        title: '您已选泽了五个',
        icon:'none',
        duration:2000
      })
    }
  },
  //删除类型
  delete_style:function(e){
    const { id, type, value } = e.currentTarget.dataset;
   var types=type;
    const { business_server, society_agent, project_tax, vehicle_tax, asset_turn, outbound_inbound, style} = this.data;
    if (type == "business_server") {
      business_server[id].status = false;
      this.setData({ business_server})
    } else if (type == "society_agent") {
      society_agent[id].status = false;
      this.setData({ society_agent})
    } else if (type == "project_tax") {
      project_tax[id].status = false;
      this.setData({ project_tax })
    } else if (type == "vehicle_tax") {
      vehicle_tax[id].status = false;
      this.setData({ vehicle_tax })
    } else if (type == "asset_turn") {
      asset_turn[id].status = false;
      this.setData({ asset_turn })
    } else if (type == "outbound_inbound") {
      outbound_inbound[id].status = false;
      this.setData({ outbound_inbound})
    }
    var styles=[];
    for(var i=0;i<style.length;i++){
      console.log(id, type, value);
      console.log(types);
      if (style[i].id == id && style[i].value== value){
        
      }else{
        styles.push(style[i])
      }
    }
    console.log(style, styles,'111111111111111')
    this.setData({ style: styles })
  },
  // 类型获取
  submit_handler:function(e){
    const { style}=this.data;
    wx.setStorageSync("launch_style", style);
    handler.redirectTo("../launch/index")
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