//app.js
var Bmob = require('utils/bmob.js');
Bmob.initialize("123abf63768d03aba6eaede069d0f7e1", "1e23019d9d04ce2270046b9c9bd502a5");

var BmobSocketIo = require('utils/bmobSocketIo.js').BmobSocketIo;
BmobSocketIo.initialize("123abf63768d03aba6eaede069d0f7e1");

App({
  
  onLaunch: function()
  {
    
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
 
  getUserInfo: function(cb)
  {
    var that = this
    if (this.globalData.userInfo)
    {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } 
    else 
    {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res)
        {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData:
  {
    userInfo: null,
    wel:true
  }
})
