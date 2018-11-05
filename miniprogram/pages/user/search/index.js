// pages/user/search/index.js
const app = getApp()
const handler = require("../../../style/function.js")
// 录音管理器
const recorderManager = wx.getRecorderManager();
// 播放器
const innerAudioContext = wx.createInnerAudioContext()
innerAudioContext.obeyMuteSwitch = false;
let img = handler.userImg;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: handler.userImg,
    evaluateList: [
      { title: "公司注册"},
      { title: "代理记账" },
      { title: "公司注销"},
      { title: "公司变更"},
      { title: "海外注册"},
      { title: "许可证代办"},
      { title: "账目报税"},
      { title: "资质转让"},
    ],
    evaluate: [{ text: "公司注册" }, { text: "公司注册" }, { text: "公司注册" }],
    soundRecording:{},
    yinpin: '',
    proxy_id: 0,
    pictrueTempPath: "", // 临时途径
    soundRecording: {
      tempPath: "",
      duration: "",
      isPlay: false
    }, // 临时录音
  },
  /**
   * 录音开始
   */
  soundRecordingStart: function () {
    const options = {
      duration: 60000,
      sampleRate: 44100,
      numberOfChannels: 1,
      encodeBitRate: 192000,
      format: 'mp3',
      frameSize: 50
    }
    recorderManager.start(options);
    console.log(recorderManager.start(options));
  },
  /**
   * 录音完成
   */
  soundRecordingEnd: function () {
    let _this = this;
    // var acid = app.siteInfo.acid;
    recorderManager.stop();
    recorderManager.onStop(function (res) {
      console.log(res,'2222222222222222222222')
      _this.setData({
        soundRecording: {
          tempPath: res.tempFilePath,
          duration:res.duration,
          isPlay: false
        },
        pictrueTempPath: res.tempFilePath})
    });
    console.log(this.data.pictrueTempPath, this.data.soundRecording)
  },
  /**
   * 录音播放
   */
  soundRecordingPlay: function () {
    let _this = this;
    let _paused = innerAudioContext.paused;
    let _soundRecording = _this.data.soundRecording;
    if (_paused) {
      innerAudioContext.play();
      _soundRecording.isPlay = true;
      setTimeout(function () {
        let _soundRecording = _this.data.soundRecording;
        _soundRecording.isPlay = false;
        _this.setData({
          soundRecording: _soundRecording
        });
      }, _soundRecording.duration * 1000)
    } else {
      innerAudioContext.stop();
      _soundRecording.isPlay = false;
    }
    _this.setData({
      soundRecording: _soundRecording
    });
  },
  /**
   * 删除录音
   */
  soundRecordingRemove: function () {
    let _this = this;
    innerAudioContext.stop();
    _this.setData({
      soundRecording: {
        tempPath: "",
        duration: "",
        isPlay: false
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.pictrueTempPath.length)
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