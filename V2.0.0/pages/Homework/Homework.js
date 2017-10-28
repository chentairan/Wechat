// pages/Homework/Homework.js
var Bmob = require('../../utils/bmob.js');
var common = require('../../utils/common.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:[],
    icon: [
            '/image/Homework/timer-2.png',
            '/image/Homework/Homework-2.png',
            '/image/Homework/activity-2.png'
          ],
    logout:true,
    rep:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options)
  {
    //从Search页传递班级班号
    this.setData
      ({
        classroom: options.classroom
      })
    //一旦进入页面计入已登陆
    wx.setStorage({
      key: "login",
      data: true
    })
    //存入班级班号
    wx.setStorage({
      key: "classroom",
      data: this.data.classroom
    })
    //设置班级标题
    wx.setNavigationBarTitle
    ({
      title: this.data.classroom + '班'
    })
    this.display();
  },

  display:function()
  {
    var Work = Bmob.Object.extend("Homework");
    var work = new Bmob.Query(Work);
    var content = new Array();
    var that = this;
    work.equalTo("class", this.data.classroom);
    work.descending('updatedAt');
    work.limit(1000);
    work.find
    ({
      success: function (results)
      {
        for (var i = 0; i < results.length; i++)
        {
          var object = results[i];
          var temp = object.updatedAt;
          //分割空格、“-”
          var arr = temp.split(" ");
          var t = arr[0].split("-");
          content[i]=new Object();
          content[i].day = parseInt(t[1]) + '月' + parseInt(t[2])+'日';
          content[i].time = arr[1].slice(0,5);

          if (parseInt(arr[1].slice(0, 2))>18) //判断白天或者黑夜
          {
            content[i].state = true;
          }
          else
          {
            content[i].state = false;
          }
          content[i].text = object.get('content');
          content[i].type = object.get('type');
          content[i].id=object.id;
          var pd = object.get('content')+" ";
          if(pd.length>17)
          {
            content[i].view = content[i].text.slice(0, 17)+' ...';
          }
          else
          {
            content[i].view = content[i].text
          }
        }
        that.setData
        ({
          content:content
        })
      },
      error: function (error)
      {
        console.log("查询失败!");
      }
    });
  },
  tap:function(e)
  {
    var content = JSON.stringify(e.currentTarget.dataset.id);
    wx.navigateTo
    ({
        url: '/pages/Editor/Editor?content=' + encodeURIComponent(content),
    })
  },
  delete:function(e)
  {
    var that=this;
    wx.showModal({
      title: '删除确认',
      content: '是否要删除此内容',
      success: function (res) {
        if (res.confirm)
        {
          var content = e.currentTarget.dataset.id
          var homework = new Bmob.Query('Homework');
          homework.equalTo("objectId", content.id);
          homework.find().then(function (todos) {
            return Bmob.Object.destroyAll(todos);
          }).then(function (todos) {
            that.display();
            console.log('删除成功');
          }, function (error) {
            console.log('删除失败');
          });
        } else if (res.cancel)
        {
          console.log('用户点击取消')
        }
      }
    })
   
  },
  editor:function()
  {
    wx.navigateTo
      ({
        url: '/pages/Editor/Editor?flag=true&content=0',
      })
  },
  root:function()
  {
    this.setData
    ({
      logout:!this.data.logout,
      rep:!this.data.rep
    })
  },
  lot:function()
  {
    try
    {
      wx.setStorageSync('login', false)
      wx.redirectTo({
        url: '/pages/Search/Search'
      })
    } catch (e) {
    }
  },
  replace:function()
  {
    wx.redirectTo({
      url: '/pages/Repassword/Repassword',
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
    this.display();
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
    this.display();
    wx.stopPullDownRefresh();
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