// Poster.js
var Bmob = require('../../utils/bmob.js');
var common = require('../../utils/common.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  num:0,
  info:new Array(),
  posterlist: new Array(),
  love_value: new Array(),
  },
  upload: function () {
    wx.redirectTo({
      url: '/pages/Upload/Upload'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //记录审核中的个数
    var that=this;
    var Poster = Bmob.Object.extend("Poster");
    var poster = new Bmob.Query(Poster);
    poster.equalTo("state", false);
    // 查询所有数据
    poster.find({
      success: function (results) {
        that.setData({
          num : results.length
        })
      },
      error: function (error) {
        console.log("查询失败!");
      }
    });

    //存入通过审核的信息
    var pos = new Bmob.Query(Poster);
    var content = new Array();
    var poster = new Array();
    pos.equalTo("state", true);
    pos.descending('createdAt');
    pos.find({
      success: function (results) 
      {
        for (var i = 0; i < results.length; i++) 
        {
          var object = results[i];
          content[i]=new Object;
          poster[i] = new Object;
          content[i].Name=object.get('Name');
          content[i].time = object.get('time');
          content[i].position = object.get('position');
          content[i].time = object.get('time');
          content[i].love = object.get('love');
          content[i].image = object.get('image');
          content[i].Id = object.id;
          poster[i].Id = object.id;
          poster[i].lovestate = false;
          try {
            var value = wx.getStorageSync('love')
            for (var j = 0; j < value.length; j++){
              if (value[j].Id == poster[i].Id){
                poster[i].lovestate = value[j].lovestate;
              }
            }
          } catch (e) {
            console.log('读取失败');
          }
        }
        that.setData({
          info:content,
          posterlist: poster
        })
        console.log(that.data.posterlist);
      },
      error: function (error) {
        console.log("查询失败!");
      }
    });


  },


  //点赞人数及图标更改事件
  lovetap: function (e) {
    var posterlist = this.data.posterlist;
    var info = this.data.info;
    var Id = e.currentTarget.dataset.id;
    var Poster = Bmob.Object.extend("Poster");
    var poster = new Bmob.Query(Poster);
    var a;
    var that = this;
    for (var i = 0; i < posterlist.length; i++) {
      if (posterlist[i].Id == Id) {
        posterlist[i].lovestate = !posterlist[i].lovestate;
        for (var j = 0; j < info.length; j++) {
          if (info[j].Id == Id) {
            a = j;
            if (posterlist[i].lovestate == true) {
              info[j].love = info[j].love + 1;
            }
            else {
              info[j].love = info[j].love - 1;
            }
          }
        }
        this.setData
          ({
            info: info,
            posterlist: posterlist
          })
        break;
      }
    }
    poster.get(Id, {
      success: function (result) {
        // 回调中可以取得这个 GameScore 对象的一个实例，然后就可以修改它了
        result.set('love', that.data.info[a].love);
        result.save();
        // The object was retrieved successfully.
      },
      error: function (error) {
        console.log("修改失败");
      }
    })
    try {
      wx.setStorageSync('love', posterlist)
    } catch (e) {
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
    this.onLoad();
    wx.stopPullDownRefresh() 
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