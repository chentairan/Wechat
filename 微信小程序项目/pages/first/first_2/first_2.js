// first_2.js
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
        pages:["2A-101","2A-102","2A-103","2A-104","2A-105","2A-106","2A-107","2A-108"]
      },
      {
        id:"two",
        name:"二层",
        open:false,
        pages: ["2A-201", "2A-202", "2A-203", "2A-204", "2A-205", "2A-206", "2A-207", "2A-208"]
      },
            {
        id:"three",
        name:"三层",
        open:false,
        pages: ["2A-301", "2A-302", "2A-303", "2A-304", "2A-305", "2A-306", "2A-307", "2A-308"]
      },    
            {
        id:"four",
        name:"四层",
        open:false,
        pages: ["2A-401", "2A-402", "2A-403", "2A-404", "2A-405", "2A-406", "2A-407", "2A-408"]
      },
            {
        id:"five",
        name:"五层",
        open:false,
        pages: ["2A-501", "2A-502", "2A-503", "2A-504", "2A-505", "2A-506", "2A-507", "2A-508"]
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