// pages/Repassword/Repassword.js
var Bmob = require('../../utils/bmob.js');
var common = require('../../utils/common.js');
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    opass:'',
    npass:'',
    classroom:'',
    content:new Array()
  },
  number:function(e)
  {
    this.setData
    ({
      opass: e.detail.value
    })
  },
  password:function(e)
  {
    this.setData
    ({
      npass: e.detail.value
    })
  },
  submit:function()
  {
    var that=this;
    var Work = Bmob.Object.extend("Homework");
    var work = new Bmob.Query(Work);
    var content=new Array();
    var opass=this.data.opass;
    work.equalTo("class", this.data.classroom);
    // 查询所有数据
    work.find
    ({
      success: function (results)
      {
        var these=that;
        for (var i = 0; i < results.length; i++) 
        {
          var object = results[i];
          content[i]=new Object();
          content[i].id = object.id;
          content[i].password = object.get('password');
          if (content[i].password!=opass)
          {
            wx.showToast
            ({
              title: '密码错误',
              image: '/image/warning.png',
              duration: 2000
            })
            return;
          }
          else
          {
            object.set("password", that.data.npass);
            object.save();
          }
        }
        wx.redirectTo({
          url: '/pages/Homework/Homework?classroom=' + these.data.classroom,
        })
      },
      error: function (error) {
        console.log("查询失败!");
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options)
  {
    try {
      var value = wx.getStorageSync('classroom')
      if (value) {
        this.setData
          ({
            classroom: value
          })
      }
    } catch (e) {
      // Do something when catch error
    }
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