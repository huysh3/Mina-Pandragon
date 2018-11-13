// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
  },
  onLoad: function () {
    wx.$http.get('logs').then(res => console.log(res))
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => util.formatTime(new Date(log))),
    })
  },
})
