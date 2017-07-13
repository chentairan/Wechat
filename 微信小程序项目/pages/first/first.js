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
        list_2: ["1", "2", "3", "4", "5", "6", "7"]
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
    choiceOfSearch: [1,2,2,3],
    presentPage: 0
    /*Diff-上面*/

  },

  /*Diff-下面*/
  /*一级菜单*/
  tap: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    var i = 0, j = 0;
    for (var len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open;
        j = i;
      } else {
        list[i].open = false;
      }
    }
    this.setData({
      list: list,
      presentPage: j
    });
  },
  
  /*二级菜单*/
  choose: function (e) {
    var i = e.currentTarget.id, list_1 = this.data.choiceOfSearch;//list_1为选择条件
    var j = this.data.presentPage;//j is the present page.
    var list_2 = this.data.list;//list_2为原始数据中的list
    list_1[j] = i;
    list_2[j].name = i;

    this.setData({
      choiceOfSearch: list_1,
      list: list_2
    });

  },
/*Diff-上面*/

Search:function(e)
{
  var p = ["1", "2A", "2B"];
  var build = Bmob.Object.extend("li");
  var query = new Bmob.Query(build);

  var flo = this.data.choiceOfSearch[1];
  var cla = this.data.choiceOfSearch[2];
  var Nwe = this.data.choiceOfSearch[3];
  var wee = this.data.choiceOfSearch[4];
  var tim = this.data.choiceOfSearch[5];

  if (flo!= 0)
  { query.equalTo("floor", flo);
    console.log('操作');}
  if (cla != 0)
  { query.equalTo("class", cla); }
  if (Nwe != 0)
  { query.equalTo("Nweek", Nwe); }
  if (wee != 0)
  { query.equalTo("week", wee); }
  if (tim != 0)
  { query.equalTo("time", tim); }
  // 查询所有数据
  query.find({
    success: function (results) {
      console.log("共查询到 " + results.length + " 条记录");
      // 循环处理查询到的数据
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        var temp;
        if (object.get('class') < 10)
        { temp = '0' + object.get('class'); }
        console.log(p[object.get('building')] + ' - ' + object.get('floor') + temp +':'  + object.get('Nweek')+'周,星期'+object.get('week')+'，时间段：'+object.get('time'));
      }
    },
    error: function (error) {
      console.log("查询失败: " + error.code + " " + error.message);
    }
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