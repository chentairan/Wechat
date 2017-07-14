// first.js
var Bmob = require('../../utils/bmob.js');
var common = require('../../utils/common.js');
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

        multiArray: [
          ["第一周", "第二周", "第三周", "第四周", "第五周", "第六周", "第七周", "第八周"],
          ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
          ["第一小节", "第二小节", "第三小节", "第四小节", "第五小节", "第六小节", "第七小节", "第八小节", "第九小节", "第十小节", "第十一小节", "第十二小节"]
        ],

        multiIndex: [0, 0, 0]      
      }
    ],
  /*Diff-下面*/
    /*检索条件*/
    choiceOfSearch: [0, 0, 0, 0, 0, 0],
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
    i = Number(i);
    list_1[j] = i + 1;
    list_2[j].name = list_2[j].list_2[i];
    this.setData({
      choiceOfSearch: list_1,
      list: list_2
    });

  },
/*Diff-上面*/


/*picker组件*/



  bindMultiPickerChange: function (e) {
    var list = this.data.list;
    var choiceOfSearch = this.data.choiceOfSearch;
    choiceOfSearch[3] = e.detail.value[0]+1;
    choiceOfSearch[4] = e.detail.value[1]+1;
    choiceOfSearch[5] = e.detail.value[2]+1;

    list[3].multiIndex = e.detail.value;
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      list: list,
      choiceOfSearch: choiceOfSearch
    })
  },

  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, ',值为', e.detail.value);
    var multiIndex = this.data.list[3].multiIndex;
    var list = this.data.list;
    multiIndex[e.detail.column] = e.detail.value;
    list[3].multiIndex = multiIndex;
    this.setData({
      list: list
    });
  },







Search:function(e)
{
  var p = ["1", "2A", "2B"];
  var con=["li","zonga","zongb"];
  
  var bul = this.data.choiceOfSearch[0];
  var flo = this.data.choiceOfSearch[1];
  var cla = this.data.choiceOfSearch[2];
  var Nwe = this.data.choiceOfSearch[3];
  var wee = this.data.choiceOfSearch[4];
  var tim = this.data.choiceOfSearch[5];

  var build = Bmob.Object.extend(con[bul-1]);
  var query = new Bmob.Query(build);
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
        console.log(p[object.get('building')-1] + ' - ' + object.get('floor') + temp +':'  + object.get('Nweek')+'周,星期'+object.get('week')+'，时间段：'+object.get('time'));
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


    var list = this.data.list;
    var choice = this.data.choiceOfSearch;
    choice = [0, 0, 0, 0, 0, 0]
    list[0].name = "教学楼";
    list[1].name = "楼层";
    list[2].name = "教室";
    this.setData({
      list:list,
      choiceOfSearch:choice
    })
  
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