// Homework.js
var Bmob = require('../../utils/bmob.js');
var common = require('../../utils/common.js');
var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    input2:'输入密码',
    find:'查询',
    classroom:'',
    password:'',
    state:true
  },
  number:function(e)
  {
    var that=this;
    var temp = e.detail.value;
    that.setData
    ({
        classroom: e.detail.value
    })
    e.detail.value;
    console.log(temp);
    var Work = Bmob.Object.extend("Homework");
    var work = new Bmob.Query(Work);
    work.equalTo("class", temp);

    // 查询所有数据
    work.find({
      success: function (results) {
        if(results.length==0)
        {
          that.setData
          ({
              input2:'未注册，设置密码',
              find:'新建',
              state:false
          })
        }
        else
        {
          that.setData
          ({
              input2: '输入密码',
              find: '查询',
              state: true
          })
        }
      },
      error: function (error)
      {
        console.log("查询失败!" );
      }
    });
  },
  password:function(e)
  {
    var that = this;
    var temp = e.detail.value;
    that.setData
    ({
        password: e.detail.value
    })
  },
  submit:function()
  {
    var that = this;
    var Work = Bmob.Object.extend("Homework");
    if (that.data.password == '' || that.data.classroom=='')
    {
      wx.showModal({
        title: '提示',
        content: '请输入班号或密码',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      return;
    }
    if(that.data.state==false)
    {
      var Add = Bmob.Object.extend("Homework");
      var add = new Add();
      add.set("password", that.data.password);
      add.set("class", that.data.classroom);
      add.set("content", "班级便签操作指南：\n\n1. 输入内容选择合适的类型，点击提交\n\n2. 长按便签删除\n\n3. 长按新建按钮弹出退出登录和重置密码功能\n\n4. 删除全部便签自动删除账号(请慎重删除！)");
      add.set("type",1);
      //添加数据，第一个入口参数是null
      add.save(null, {
        success: function (result) {
          try {
            wx.setStorageSync('password', that.data.password)
            wx.setStorageSync('classroom', that.data.classroom)
          } catch (e) { }
          wx.redirectTo
            ({
              url: '/pages/Homework/Homework?classroom=' + that.data.classroom
            })
        },
        error: function (result, error) {
          // 添加失败
          console.log('创建失败!');

        }
      });
    }
    else
    {
      var check = new Bmob.Query(Work);
      check.equalTo("class", that.data.classroom);
      check.equalTo("password", that.data.password);
      // 查询所有数据
      check.find
      ({
        success: function (results) {
          if (results.length == 0)
          {
            wx.showToast({
              title: '密码错误',
              image: '/image/warning.png',
              duration: 1500
            })
          }
          else 
          {
            try {
              wx.setStorageSync('password', that.data.password)
            } catch (e) {
            }
            wx.redirectTo
              ({
                url: '/pages/Homework/Homework?classroom=' + that.data.classroom
              })
          }
        },
        error: function (error) {
          console.log("查询失败!");
        }
      });
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