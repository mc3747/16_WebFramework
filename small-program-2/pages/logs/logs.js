//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    console.log('✅');
    
    // 获取日志
    let logs = wx.getStorageSync('logs');
    let formateTimeArray = [];
    for (var log of logs){
      let formateSeconds = log;
      let formateDate = new Date(formateSeconds);
      let formateTime = util.formatTime(formateDate);
      formateTimeArray.push(formateTime);
    };

    this.setData({
      // 普通方法
      logs: formateTimeArray

      // 更加高级的方法
      // logs: (wx.getStorageSync('logs') || []).map(log => {
      //   return util.formatTime(new Date(log))
       
      // })
    })
  }
})
