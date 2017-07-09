// first_1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:"one",
        name:"一层",
        open:false,
        pages:["1-101","1-102","1-103","1-104","1-105","1-106","1-107","1-108"]
      },
      {
        id:"two",
        name:"二层",
        open:false,
        pages: ["1-201", "1-202", "1-203", "1-204", "1-205", "1-206", "1-207", "1-208"]
      },
            {
        id:"three",
        name:"三层",
        open:false,
        pages: ["1-301", "1-302", "1-303", "1-304", "1-305", "1-306", "1-307", "1-308"]
      },    
            {
        id:"four",
        name:"四层",
        open:false,
        pages: ["1-401", "1-402", "1-403", "1-404", "1-405", "1-406", "1-407", "1-408"]
      },
            {
        id:"five",
        name:"五层",
        open:false,
        pages: ["1-501", "1-502", "1-503", "1-504", "1-505", "1-506", "1-507", "1-508"]
      }
    ]
  },

  widgetsToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    }
    this.setData({
      list: list
    });
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