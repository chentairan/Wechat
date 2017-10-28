// pages/Editor/Editor.js
var Bmob = require('../../utils/bmob.js');
var common = require('../../utils/common.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timer:'/image/Homework/timer.png',
    Homework:'/image/Homework/Homework.png',
    activity:'/image/Homework/activity.png',
    hide:true,
    timer_text: '#e3e3e3',
    Homework_text: '#e3e3e3',
    activity_text: '#e3e3e3',
    type:0
  },
  //聚焦后显示提交按钮
  editor:function()
  {
    this.setData
    ({
      hide:false
    })
  },
  timer:function()
  {
    this.setData
    ({
        timer: '/image/Homework/timer-2.png',
        Homework: '/image/Homework/Homework.png',
        activity: '/image/Homework/activity.png',
        timer_text:'#F8AC08',
        Homework_text:'#e3e3e3',
        activity_text:'#e3e3e3',
        type:1
    })
  },
  Homework:function()
  {
    this.setData
    ({
      timer: '/image/Homework/timer.png',
      Homework:'/image/Homework/Homework-2.png',
      activity:'/image/Homework/activity.png',
      timer_text: '#e3e3e3',
      Homework_text: '#F8AC08',
      activity_text: '#e3e3e3',
      type:2
    })
  },
  activity:function()
  {
    this.setData
    ({
      timer: '/image/Homework/timer.png',
      Homework: '/image/Homework/Homework.png',
      activity: '/image/Homework/activity-2.png',
      timer_text: '#e3e3e3',
      Homework_text: '#e3e3e3',
      activity_text: '#F8AC08',
      type:3
    })
  },
  done:function(e)
  {
    this.setData
    ({
      value: e.detail.value
    })
  },
  submit:function()
  {
    var that=this
    if(this.data.flag==false)
    {
      var Submit = Bmob.Object.extend("Homework");
      var submit = new Bmob.Query(Submit);
      var id = this.data.content.id;
      submit.get(id, {
        success: function (result)
        {
          result.set('content', that.data.value);
          result.set('type', that.data.type);
          result.save();
          wx.showToast({
            title: '提交成功',
            icon: 'success',
            duration: 2000
          })
        },
        error: function (object, error)
        {
          console.log('修改错误');
        }
      });
    }
    else
    {
      var Submit = Bmob.Object.extend("Homework");
      var submit = new Submit();
      submit.set("password", this.data.password);
      submit.set("class", this.data.classroom);
      submit.set("content", this.data.value);
      submit.set("type",this.data.type);
      //添加数据，第一个入口参数是null
      submit.save(null, {
        success: function (result)
        {
          wx.showToast({
            title: '提交成功',
            icon: 'success',
            duration: 2000
          })
          console.log("提交成功");
        },
        error: function (result, error)
        {
          console.log('提交失败');
        }
      });
    }
  },
  getinfo:function()
  {
    try {
      var value = wx.getStorageSync('password')
      if (value) {
        this.setData
          ({
            password: value
          })
      }
    } catch (e) {
      console.log('获取密码失败');
    }
    try {
      var value = wx.getStorageSync('classroom')
      if (value) {
        this.setData
          ({
            classroom: value
          })
      }
    } catch (e) {
      console.log('获取班号失败');
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options)
  {
    var content = JSON.parse(options.content);
    var flag = options.flag;
    //获取密码和班号
    this.getinfo();
    //若为新建标签
    if(flag)
    {
      this.setData
      ({
        flag:true
      })
    }
    //若为已存在标签
    if(content)
    {
      this.setData
      ({
        content:content,
        value:content.text,
        flag:false
      })
    }
    switch(content.type)
    {
      case 1:
              this.setData
              ({
                type:1,
                timer: '/image/Homework/timer-2.png',
                timer_text: '#F8AC08'
              })
              break;
      case 2:
              this.setData
                ({
                  type: 2,
                  Homework: '/image/Homework/Homework-2.png',
                  Homework_text: '#F8AC08'
                })
              break;
      case 3:
              this.setData
                ({
                  type: 3,
                  activity: '/image/Homework/activity-2.png',
                  activity_text: '#F8AC08'
                })
              break;
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