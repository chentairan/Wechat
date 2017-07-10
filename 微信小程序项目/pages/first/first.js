// first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  buttonli:function() 
  {
    console.log('点击理教')
  },
  buttonza:function()
  {
    console.log('点击综教 A')
  },
  buttonzb:function()
  {
    console.log('点击综教 B')
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
    //下拉更新
   onPullDownRefresh: function() {
      if (app._user.is_bind) {
        this.getCardData();
      } else {
        wx.stopPullDownRefresh();
      }
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
    return {
      title: 'BIT教室',
      path: '/page/first'
    }
  }
})