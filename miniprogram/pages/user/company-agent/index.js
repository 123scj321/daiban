// pages/user/company-agent/index.js
const app = getApp()
const handler = require("../../../style/function.js");
var tcity = require("../../../style/citys.js");
let img = handler.userImg;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list_context: [{ id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 },],
    imgUrl: handler.userImg,
    
    index: "0",
    select_box:true,
    company_agent_data:[
      {
        title:"地区",
        status:true,
        is_default:false,
        subtitle:
          [
            { id: "001", text: "不限" ,is_default:true},
            { id: "001", text: "碑林区", is_default: false},
            { id: "001", text: "莲湖区", is_default: false},
            { id: "001", text: "灞桥区", is_default: false},
            { id: "001", text: "雁塔区", is_default: false},
            { id: "001", text: "阎良区", is_default: false },
            { id: "001", text: "未央区", is_default: false},
            { id: "001", text: "新城区", is_default: false},
            { id: "001", text: "长安区", is_default: false},
            { id: "001", text: "临潼区", is_default: false},
          ]
        },
        {
          title: "服务类型",
          status: false,
          is_default: false,
          subtitle:
            [
              { id: "001", text: "不限", is_default: true},
              { id: "001", text: "内资公司", is_default: false},
              { id: "001", text: "公司注销", is_default: false},
              { id: "001", text: "工商年检", is_default: false},
              { id: "001", text: "海外公司", is_default: false},
              { id: "001", text: "一般纳税", is_default: false },
            ]
        },
        {
          title: "排序",
          status: false,
          is_default: false,
          subtitle:
            [
              { id: "001", text: "不限", is_default: true },
              { id: "001", text: "优先看信用分高的", is_default: false},
            ]
        },
        {
          title: "服务",
          status: false,
          is_default: false,
          subtitle:
            [
              { id: "001", text: "不限", is_default: true},
              { id: "001", text: "快速取证", is_default: false },
              { id: "001", text: "全程代理", is_default: false },
            ]
        },
      ],
    search_context:"",
    province: "",//省市级联数据
    citys: [],
    city: "",
    countys: [],
    county: '',
    value: [0, 0, 0],
    values: [0, 0, 0],
    condition: false,//省市级联
  },
  // bindPickerChange 选择城市
  bindPickerChange:function(e){
    console.log(e.detail)
    this.setData({ index: parseInt(e.detail.value)})
    console.log(this.data.index)
  },
  // get_search_context 搜索内容
  get_search_context:function(e){
    this.setData({ search_context:e.detail.value});
  },
  // 筛选按钮
  selectTimeShowTimeHandler:function(e){
    const { company_agent_data, select_box}=this.data;
    const id = e.currentTarget.dataset.id;
    company_agent_data[id].status=true;
    for (var i = 0; i < company_agent_data.length;i++){
      if (id==i){
        company_agent_data[i].status = true;
        company_agent_data[i].is_active=true;
      }else{
        company_agent_data[i].status = false;
      }
    }
    // console.log(e.currentTarget.dataset.id)
    this.setData({ select_box: false, company_agent_data});
  },
  // select_context 选择筛选内容
  select_context:function(e){
    const { company_agent_data, select_box } = this.data;
    const id = e.currentTarget.dataset.id;
    // console.log(id)
    
    for (var i = 0; i < company_agent_data.length;i++){
      if (company_agent_data[i].status){
        // console.log(company_agent_data[i])
        for (var j = 0; j < company_agent_data[i].subtitle.length;j++){
          // console.log(company_agent_data[i].subtitle[j])
          if(j==id){
            company_agent_data[i].subtitle[j].is_default = true;
            if(j==0){
              company_agent_data[i].is_active=false;
            }
          }else{
            company_agent_data[i].subtitle[j].is_default = false;
          }
        }
      }
    }
    this.setData({ select_box: true, company_agent_data })
  },
  // 省市级联
  bindChange: function (e) {
    //console.log(e);
    var val = e.detail.value
    var t = this.data.values;
    var cityData = this.data.cityData;
    var company_agent_data = this.data.company_agent_data;
    if (val[0] != t[0]) {
      console.log('province no ');
      const citys = [];
      const countys = [];
      const countyss = [{ id: "001", text: "不限", is_default: true }];
      for (let i = 0; i < cityData[val[0]].sub.length; i++) {
        citys.push(cityData[val[0]].sub[i].name)
      }
      for (let i = 0; i < cityData[val[0]].sub[0].sub.length; i++) {
        countys.push(cityData[val[0]].sub[0].sub[i].name)
      }
      for (let i = 0; i < cityData[val[0]].sub[0].sub.length;i++){
        countyss.push({ id: i, text: cityData[val[0]].sub[0].sub[i].name , is_default: false })
      }
      company_agent_data[0].subtitle = countyss;
      this.setData({
        province: this.data.provinces[val[0]],
        city: cityData[val[0]].sub[0].name,
        company_agent_data: company_agent_data,
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
  get_city_data: function () {
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.get_city_data();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  }
})