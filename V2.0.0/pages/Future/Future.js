// Future.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  chat:function()
{
  wx.navigateTo({
    url: '/pages/Chat/Chat'
  })
},
  poster: function () {
    wx.navigateTo({
      url: '/pages/Poster/Poster'
    })
  },
  Homework: function () {
    try {
      try {
        var dell = wx.getStorageSync('classroom')
      } catch (e) {
      }
      console.log(dell);
      var value = wx.getStorageSync('login')
      if (value==false) {
        wx.navigateTo({
          url: '/pages/Search/Search'
        })
      }
      else
      {
        wx.navigateTo({
          url: '/pages/Homework/Homework?classroom='+dell
        })
      }
    } catch (e) {
      // Do something when catch error
    }
    
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