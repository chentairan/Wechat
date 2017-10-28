// Upload.js
var Bmob = require('../../utils/bmob.js');
var common = require('../../utils/common.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  name:'',
  time:'',
  place:'',
  image:'',
  state:false
  },
name:function(e)
{
  this.setData
  ({
      name: e.detail.value
  })
},
time: function (e) {
  this.setData
    ({
      time: e.detail.value
    })
},
place: function (e) {
  this.setData
    ({
      place: e.detail.value
    })
},
submit:function()
{
  var that=this;
  wx.showModal({
    title: '提交提示',
    content: '请确认信息填写完整',
    success: function (res) {
      if (res.confirm)
      {
        var Poster = Bmob.Object.extend("Poster");
        var poster = new Poster();
        poster.set("Name", that.data.name);
        poster.set("state", false);
        poster.set("time", that.data.time);
        poster.set("position", that.data.place);
        poster.set("love", 0);
        poster.set("image", that.data.image);
        //添加数据，第一个入口参数是null
        poster.save(null, {
          success: function (result)
          {
            wx.navigateTo({
              url: '/pages/Poster/Poster'
            })
          },
          error: function (result, error) {
            console.log('上传失败');
          }
        });  
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    }
  })
 
},
image:function()
{
  var that = this;
  wx.chooseImage
  ({
    count: 1, 
    sizeType: ['compressed'],
    sourceType: ['album', 'camera'],
    success: function (res) {
      var tempFilePaths = res.tempFilePaths;
      if (tempFilePaths.length > 0) {
        var name = "1.jpg";
        var file = new Bmob.File(name, tempFilePaths);
        file.save().then(function (res) {
          that.setData({
            image: res.url(),
            state: true
          })
        }, function (error) {
          console.log(error);
        })
      }
    }
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