// Thank.js
var Bmob = require('../../utils/bmob.js');
var common = require('../../utils/common.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    thanklist:new Array()
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
    var that=this;  
    var Thank = Bmob.Object.extend('Thank');
    var thank = new Bmob.Query(Thank);
    thank.find({
      success: function (results) {
       var thanklist = new Array();
       for(var i=0;i<results.length;i++)
       {
        var object = results[i];
        thanklist[i] = new Object();
        thanklist[i].name = object.get('name');
        thanklist[i].image = object.get('image');
        console.log(thanklist[i].image._url);
       }
       that.setData({
          thanklist:thanklist
       })
      },
      error: function (error) {
        console.log("查询失败!");
      }
    });


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