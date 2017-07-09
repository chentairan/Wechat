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
        pages:["2B-101","2B-102","2B-103","2B-104","2B-105","2B-106","2B-107","2B-108"]
      },
      {
        id:"two",
        name:"二层",
        open:false,
        pages: ["2B-201", "2B-202", "2B-203", "2B-204", "2B-205", "2B-206", "2B-207", "2B-208"]
      },
            {
        id:"three",
        name:"三层",
        open:false,
        pages: ["2B-301", "2B-302", "2B-303", "2B-304", "2B-305", "2B-306", "2B-307", "2B-308"]
      },    
            {
        id:"four",
        name:"四层",
        open:false,
        pages: ["2B-401", "2B-402", "2B-403", "2B-404", "2B-405", "2B-406", "2B-407", "2B-408"]
      },
            {
        id:"five",
        name:"五层",
        open:false,
        pages: ["2B-501", "2B-502", "2B-503", "2B-504", "2B-505", "2B-506", "2B-507", "2B-508"]
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