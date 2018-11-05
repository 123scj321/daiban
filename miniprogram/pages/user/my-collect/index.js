// pages/user/my-collect/index.js
const handler = require("../../../style/function.js")
let img = handler.userImg;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: handler.userImg,
    collect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 },{ id: 6 }, { id: 7 },]
  },
  // 删除收藏按钮
  delete_collect:function(e){
    const that=this;
    const { collect}=this.data;
    const id=e.currentTarget.dataset.id;
    var collects=[];
    wx.showModal({
      content: '确定删除当前收藏',
      success:function(res){
        console.log(collect, id)
        if(res.confirm){
          wx.showLoading({})
          for (var i = 0; i < collect.length;i++){
            if(i!=id){
              collects.push(collect[i])
            }
          }
          console.log(collects,id)
        }
        setTimeout(function(){
          wx.hideLoading()
          that.setData({ collect: collects })
        },5000)
        
      }
    })
  },
  // 下拉刷新
  onReachBottom: function () {
    wx.showLoading({})
    let { collect } = this.data;
    let that = this;
    setTimeout(function () {
      collect.push({ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 })
      that.setData({ collect });
      wx.hideLoading()
    }, 5000)
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

  
})