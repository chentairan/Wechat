// first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:"one",
        name:"教学楼",
        open:false,
        list_2: ["理教", "综教A", "综教B"]
      },
      {
        id:"two",
        name:"楼层",
        open:false,
        list_2: ["一层", "二层", "三层", "四层", "五层"]
      },
      {
        id:"three",
        name:"教室",
        open:false,
        list_2: ["普通教室", "多媒体教室"]
      },
      {
        id:"four",
        name:"时间",
        open:false,
        list_2:["1","2","3","4","5","6","7","8","9"]
      }
    ]
  },

  tap: function (e) {
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

  /*
  buttonli:function() 
  {
    console.log('点击理教')
    this.setData({text:true})
  },
  buttonza:function()
  {
    console.log('点击综教 A')
    this.setData({image:true})
  },
  buttonzb:function()
  {
    console.log('点击综教 B')
    this.setData({image:false,text:false})
  },
  */
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