// first.js
var Bmob = require('../../utils/bmob.js');
var common = require('../../utils/common.js');
var building=1;
var floor=3;
var classroom=8;
var time=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*初始化数据*/
  
    list: [
      {
        id: "one",
        name: "教学楼",
        open: false,
        list_2: ["理教", "综教A", "综教B"]
      },
      {
        id: "two",
        name: "楼层",
        open: false,
        list_2: ["一层", "二层", "三层", "四层", "五层"]
      },
      {
        id: "three",
        name: "教室",
        open: false,
        list_2: ["普通教室", "多媒体教室"]
      },
      {
        id: "four",
        name: "时间",
        open: false,
        list_2: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
      }
    ],
    
/*Diff-下面*/
    /*检索条件*/
    choiceOfSearch:["理教","一层","1","1"],
    presentPage:1
/*Diff-上面*/

  },

/*Diff-下面*/
  /*选择筛选的内容*/
  choose: function(e){
    var i = e.currentTarget.page, list_1 = this.data.choiceOfSearch;
    var j = this.data.presentPage;
    var list_2 = this.data.list;
    list_1[j]=i;
    list_2[j].name=i;

    this.setData({
      choiceOfSearch:list_1,
      list: list_2
    });
  },

/*选择是否打开列表*/
  tap: function (e) {
    var id = e.currentTarget.id, list = this.data.list, j = e.currentTarget.item_x;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    }
    this.setData({
      list: list,
      presentPage: j
    });
  },
/*Diff-上面*/


  Search:function()
  {
    Bmob.Cloud.run('Search', { "building":{building}, "classroom":{classroom}, "floor":{floor} }, {
      success: function (result) {
        var test=result;
        console.log(test);
      },
      error: function (error) {
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