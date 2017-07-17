// third.js
var Bmob = require('../../utils/bmob.js');
var Suggestion=Bmob.Object.extend("Suggestion");

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  /*提交反馈*/
  Submite:function(e)
  {
    var suggestion=new Suggestion();
    suggestion.set("text",e.detail.value);
    suggestion.save(null, 
    {
      success: function (result)
      {
        console.log("添加反馈成功, objectId:" + result.id);
      },
      error: function (result, error)
      {
        // 添加失败
        console.log('添加反馈失败');
      }
    })
    wx.showToast({
      title: '感谢您的反馈！',
            icon: 'success',
            duration: 2000
          })
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