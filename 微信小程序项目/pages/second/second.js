// second.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: 
  {
    userInfo: {},
    showDialog: false,
    list:
    [
      {
        name:'意见反馈',
        path:'/pages/third/third'
      },
      {
        name:'关于我们',
        path:'/pages/fourth/fourth'
      }
    ]
  },
  toggleDialog() {
    this.setData
    ({
      showDialog: !this.data.showDialog
    });
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) 
  {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
    //更新数据
    that.setData({
    userInfo: userInfo
    })
  })
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
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
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