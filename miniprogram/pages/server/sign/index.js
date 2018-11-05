// pages/server/sign/index.js
const app = getApp()
const handler = require("../../../style/function.js")
let img = handler.userImg;
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let dateArr = {
  year: year,
  month: month
};
/**
 * 判断是否闰年
 */
let leapYear = function (Year) {
  if (((Year % 4) == 0) && ((Year % 100) != 0) || ((Year % 400) == 0)) {
    return (true);
  } else {
    return (false);
  }
}

/**
 * 判断指定月天数
 */
let countDayByMonth = function (Year, Month) {
  if (Month == 1 | Month == 3 | Month == 5 | Month == 7 | Month == 8 | Month == 10 | Month == 12) {
    return 31;
  } else if (Month == 4 | Month == 6 | Month == 9 | Month == 11) {
    return 30;
  } else if (Month == 2) {
    let isLeapYear = leapYear(Year);
    if (isLeapYear) {
      return 29;
    } else {
      return 28;
    }
  }
}

/**
 * 获取当月第一天星期几
 */
let getDayByMonth = function (Year, Month) {
  return new Date(Year + '-' + Month + '-1').getDay();
}
Page({
  data: {
    dateArr: [],
    monthArr: [],
    sign:{
      isSign: false, // 签到状态
      day: 0,
      get_win: [
        { title: '10天', grow_point: 40, status: true },
        { title: '30天', grow_point: 50, status: true }
      ]
    },
    imgUrl: handler.serverImg,//图片路径引入
  },
  onLoad: function () {
    

  },
  //签到按钮
  signIn: function () {
    let that = this;
    const { sign}=this.data;
    // 重置签到状态
    wx.showModal({
      content: '已签到',
      duration:5000,
      showCancel:false,
      success:function(){
        sign.isSign = true;
        ++sign.day;
        that.setData({
          sign
        });
        handler.redirectTo("../member/index?status=true")
      },
    })
  },
  onShow: function (options) {
    let years = date.getFullYear();
    let months = date.getMonth() + 1;
    let days = date.getDate();
    this.get_data(years, months);
  },
  // 倒退时间
  data_left_handler:function(){
    const { dateArr}=this.data;
    if (dateArr.month>1){
      --dateArr.month;
    }else{
      --dateArr.year;
      dateArr.month=12;
    }
    this.get_data(dateArr.year, dateArr.month);
    this.setData({ dateArr})
  },
  // 前进时间
  data_right_handler:function(){
    const { dateArr } = this.data;
    if (dateArr.month <12) {
      ++dateArr.month;
    } else {
      ++dateArr.year;
      dateArr.month = 1;
    }
    this.get_data(dateArr.year, dateArr.month);
    this.setData({ dateArr })
  },
  //获取时间数据
  get_data: function (year,month){
    var currentDate=new Date();
    let years = date.getFullYear();
    let months = date.getMonth() + 1;
    let days = date.getDate();
    let currentMonth = countDayByMonth(year, month);
    let monthArr = [];
    let currentDay = getDayByMonth(year, month);
    let i, tempArr = [];

    /**
     * 填充默认
     */
    for (i = 0; i < currentDay; i++) {
      tempArr.push({
        name: "",
      });
    }

    /**
     * 日期遍历
     */
    for (i = 0; i < currentMonth; i++) {
      currentDay++;
      if (years == year && months== month && days==(i+1)){
        tempArr.push({
          name: year + '-' + month + '-' + (i + 1),
          value: i + 1,
          flag: true
        });
      }else{
        tempArr.push({
          name: year + '-' + month + '-' + (i + 1),
          value: i + 1,
          flag: false
        });
      }
      

      if (currentDay % 7 == 0 || i == currentMonth - 1) {
        monthArr.push(tempArr);
        tempArr = [];
      }
    }
    this.setData({
      dateArr: {
        year: year,
        month: month
      },
      monthArr: monthArr,})
  },
  get_win:function(e){
    var id=e.currentTarget.dataset.id;
    const {sign}=this.data;
    var that=this;
    wx.showModal({
      content: '恭喜你获取奖励',
      showCancel: false,
      success:function(){
        sign.get_win[id].status = false;
        that.setData({ sign})
      } 
    })
    
  },
})