//index.js
const app = getApp()
const handler=require("../../../style/function.js");
var tcity = require("../../../style/citys.js");
let img = handler.userImg;
Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    movies: [{ id: 1, banner_img: img + "banner01.png"},
      { id: 2, banner_img: img + "banner01.png"},
      {id: 3, banner_img: img+"banner01.png"}],
    imgUrl: handler.userImg,
    array: [],
    index:1,
    resume_list: [{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }],
    authStatus: true,//授权状态
    canIUse: wx.canIUse('button.open-type.getUserInfo'),//获取登录按钮
    authorize: "http://xyds.4hl.cn/xyds/uploads/otherimg/index/avatar.png",
    provinces: [],
    province: "",
    citys: [],
    city: "",
    countys: [],
    county: '',
    value: [0, 0, 0],
    values: [0, 0, 0],
    condition: false
    },
    // 用户授权
  updateUserInfo: function () {
    var that = this;
    var id = wx.getStorageSync('user_info').id;
    if (id) {
      handler.requestData("getUserInfoById", { id: id }, function (res) {
        if (res.success == true) {
          wx.setStorageSync('user_info', res.data);
        } else {
          wx.showToast({
            title: res.message,
            icon: 'loading'
          })
        }
      });
    }
    // handler.requestData("bannerList", {}, function (res) {
    //   console.log(res.data);
    //   that.setData({ movies: res.data })
    // })
  },
  closePanel: function () {
    this.setData({
      authStatus: false
    });
  },
  //formSubmit 页面跳转
  formSubmit:function(e){
    handler.intoPageHandler(e.currentTarget.dataset.url)
  },
  //底部导航
  footer_handler:function(e){
    handler.redirectTo(e.currentTarget.dataset.url)
  }, 
  // 省市级联
  bindChange: function (e) {
    //console.log(e);
    var val = e.detail.value
    var t = this.data.values;
    var cityData = this.data.cityData;

    if (val[0] != t[0]) {
      console.log('province no ');
      const citys = [];
      const countys = [];

      for (let i = 0; i < cityData[val[0]].sub.length; i++) {
        citys.push(cityData[val[0]].sub[i].name)
      }
      for (let i = 0; i < cityData[val[0]].sub[0].sub.length; i++) {
        countys.push(cityData[val[0]].sub[0].sub[i].name)
      }

      this.setData({
        province: this.data.provinces[val[0]],
        city: cityData[val[0]].sub[0].name,
        citys: citys,
        county: cityData[val[0]].sub[0].sub[0].name,
        countys: countys,
        values: val,
        value: [val[0], 0, 0]
      })

      return;
    }
    if (val[1] != t[1]) {
      console.log('city no');
      const countys = [];

      for (let i = 0; i < cityData[val[0]].sub[val[1]].sub.length; i++) {
        countys.push(cityData[val[0]].sub[val[1]].sub[i].name)
      }

      this.setData({
        city: this.data.citys[val[1]],
        county: cityData[val[0]].sub[val[1]].sub[0].name,
        countys: countys,
        values: val,
        value: [val[0], val[1], 0]
      })
      return;
    }
    if (val[2] != t[2]) {
      console.log('county no');
      this.setData({
        county: this.data.countys[val[2]],
        values: val
      })
      return;
    }


  },
  open: function () {
    this.setData({
      condition: !this.data.condition
    })
  },
  // 初始化城市数据
  get_city_data:function(){
    var that = this;
    tcity.init(that);
    var cityData = that.data.cityData;
    const provinces = [];
    const citys = [];
    const countys = [];

    for (let i = 0; i < cityData.length; i++) {
      provinces.push(cityData[i].name);
    }
    console.log('省份完成');
    for (let i = 0; i < cityData[0].sub.length; i++) {
      citys.push(cityData[0].sub[i].name)
    }
    console.log('city完成');
    for (let i = 0; i < cityData[0].sub[0].sub.length; i++) {
      countys.push(cityData[0].sub[0].sub[i].name)
    }
    that.setData({
      'provinces': provinces,
      'citys': citys,
      'countys': countys,
      'province': cityData[0].name,
      'city': cityData[0].sub[0].name,
      'county': cityData[0].sub[0].sub[0].name
    })
    console.log('初始化完成');
  },
  // 下拉刷新
  onReachBottom:function() {
    wx.showLoading({})
    let { resume_list}=this.data;
    let that=this;
    setTimeout(function(){
      resume_list.push({ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 })
      that.setData({ resume_list});
      wx.hideLoading()
    },5000)
  },
  onLoad: function() {
    this.updateUserInfo();
    this.get_city_data();
  },
})
