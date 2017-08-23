// first.js
var Bmob = require('../../utils/bmob.js');
var common = require('../../utils/common.js');
var Operation = Bmob.Object.extend("Operation_data");
var util = require('../../utils/util.js');
var that=this;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*初始化数据*/
    openinfor1: false,
    openinfor2: false,
    inforlist: new Array(),
    wel_value: true,
    blank: true,
    name:"点击上方选择筛选条件",
    /*教室的选择——multipickerForClassroom*/
    /*0 is the li.(changed in the functions)
     1 is the first floor.
     1 is the X-X01.
    */
    multiArray_classroom: [
      ['理教', '综教A', '综教B'],
      ['不选', '一层', '二层', '三层', '四层', '五层'],
      ['不选']
    ],
    objectMultiArray_classroom: [
      [
        {
          id: 0,
          name: '理教'
        },
        {
          id: 1,
          name: '综教A'
        },
        {
          id: 2,
          name: '综教B'
        }
      ], [
        {
          id: 0,
          name: '不选'
        },
        {
          id: 1,
          name: '一层'
        },
        {
          id: 2,
          name: '二层'
        },
        {
          id: 3,
          name: '三层'
        },
        {
          id: 4,
          name: '四层'
        },
        {
          id: 5,
          name: '五层'
        }
      ], [
        {
          id: 0,
          name: '不选'
        }
      ]
    ],
    multiIndex_classroom: [0, 0, 0],


    /*时间的选择——multipickerForTime*/
    multiArray_time: [
      ["不选", "第一周", "第二周", "第三周", "第四周", "第五周", "第六周", "第七周", "第八周", "第九周", "第十周", "第十一周", "第十二周", "第十三周", "第十四周", "第十五周", "第十六周", "第十七周", "第十八周", "第十九周"],
      ["不选", "星期一", "星期二", "星期三", "星期四", "星期五"],
      ["不选", "第一大节", "第二大节", "第三大节", "第四大节", "第五大节"]
    ],
    multiIndex_time: [0, 0, 0],      
    
    /*按钮的选择*/   
    x: 275,
    y: 402,


    /*检索条件*/
    choiceOfSearch: [0, 0, 0, 0, 0, 0],  
  },
  wel:function()
  {
    this.setData({
      wel_value:true
    });
    try {
      wx.setStorageSync('welh', true)
    } catch (e) {
    }
  },
/*pickerForClassroom相关函数*/
/* 1 is the classroom */
  bindMultiPickerChange_1: function (e) {
    var choiceOfSearch = this.data.choiceOfSearch;
    choiceOfSearch[0] = e.detail.value[0]+1;
    choiceOfSearch[1] = e.detail.value[1];
    choiceOfSearch[2] = e.detail.value[2];

    console.log('picker发送选择改变，携带值为', e.detail.value)

    this.setData({
      multiIndex_classroom: e.detail.value
    })
  },
  bindMultiPickerColumnChange_1: function (e) {
    console.log(e);
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray_classroom: this.data.multiArray_classroom,
      multiIndex_classroom: this.data.multiIndex_classroom
    };
    data.multiIndex_classroom[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0://change the building
        data.multiIndex_classroom[1] = 0;
        data.multiIndex_classroom[2] = 0;
        data.multiArray_classroom[2] = ['不选'];
        break;
      case 1:
        switch (data.multiIndex_classroom[0]) {//change the floors according to the building
          case 0:// the li
            switch (data.multiIndex_classroom[1]) {
              case 0:
                data.multiArray_classroom[2] = ['不选'];
                break;
              case 1:
                data.multiArray_classroom[2] = ['不选', '1-101', '1-102', '1-103', '1-104', '1-105', '1-106', '1-107', '1-108', '1-109'];
                break;
              case 2:
                data.multiArray_classroom[2] = ['不选', '1-201', '1-202', '1-203', '1-204', '1-205', '1-206', '1-207', '1-208', '1-209', '1-210'];
                break;
              case 3:
                data.multiArray_classroom[2] = ['不选', '1-301', '1-302', '1-303', '1-304', '1-305', '1-306', '1-307', '1-308', '1-309', '1-310'];
                break;
              case 4:
                data.multiArray_classroom[2] = ['不选', '1-401', '1-402', '1-403', '1-404', '1-405', '1-406', '1-407', '1-408', '1-409'];
                break;
              case 5:
                data.multiArray_classroom[2] = ['不选', '1-501', '1-502', '1-503', '1-504', '1-505', '1-506'];
                break;
            }
            break;
          case 1://the zongA
            switch (data.multiIndex_classroom[1]) {
              case 0:
                data.multiArray_classroom[2] = ['不选'];
                break;
              case 1:
                data.multiArray_classroom[2] = ['不选', '2A-101', '2A-102', '2A-103', '2A-104', '2A-105', '2A-106'];
                break;
              case 2:
                data.multiArray_classroom[2] = ['不选', '2A-201', '2A-202', '2A-203', '2A-204', '2A-205', '2A-206'];
                break;
              case 3:
                data.multiArray_classroom[2] = ['不选', '2A-301', '2A-302', '2A-303', '2A-304', '2A-305', '2A-306'];
                break;
              case 4:
                data.multiArray_classroom[2] = ['不选', '2A-401', '2A-402', '2A-403', '2A-404', '2A-405', '2A-406'];
                break;
              case 5:
                data.multiArray_classroom[2] = ['不选', '2A-501', '2A-502', '2A-503', '2A-504'];
                break;
            }
            break;
          case 2://the zongB
            switch (data.multiIndex_classroom[1]) {
              case 0:
                data.multiArray_classroom[2] = ['不选'];
                break;
              case 1:
                data.multiArray_classroom[2] = ['不选', '2B-101', '2B-102', '2B-103', '2B-104', '2B-105'];
                break;
              case 2:
                data.multiArray_classroom[2] = ['不选', '2B-201', '2B-202', '2B-203', '2B-204', '2B-205', '2B-206'];
                break;
              case 3:
                data.multiArray_classroom[2] = ['不选', '2B-301', '2B-302', '2B-303', '2B-304', '2B-305', '2B-306'];
                break;
              case 4:
                data.multiArray_classroom[2] = ['不选', '2B-401', '2B-402', '2B-403', '2B-404', '2B-405', '2B-406'];
                break;
              case 5:
                data.multiArray_classroom[2] = ['不选', '2B-501', '2B-502', '2B-503', '2B-504', '2B-505', '2B-506'];
                break;
            }
            break;
        }
        data.multiIndex_classroom[2] = 0;
        console.log(data.multiIndex_classroom);
        break;
    }
    this.setData(data);
  },

/*pickerForTime相关函数*/
/* 2 is the classroom */
  bindMultiPickerChange_2: function (e) {

    var choiceOfSearch = this.data.choiceOfSearch;
    choiceOfSearch[3] = e.detail.value[0];
    choiceOfSearch[4] = e.detail.value[1];
    choiceOfSearch[5] = e.detail.value[2];

    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex_time: e.detail.value,
      choiceOfSearch: choiceOfSearch
    })
  },
  bindMultiPickerColumnChange_2: function (e) {
    console.log('修改的列为', e.detail.column, ',值为', e.detail.value);
    var multiIndex_time = this.data.multiIndex_time;
    multiIndex_time[e.detail.column] = e.detail.value;
    this.setData({
      multiIndex_time: multiIndex_time
    });
  },


/*清屏*/
  clear: function (e) {
    this.setData({
      inforlist: null,
      blank: true,
      choiceOfSearch: [0, 0, 0, 0, 0, 0],
      multiIndex_time: [0, 0, 0],      
      multiIndex_classroom: [0, 0, 0],
    })
    console.log('清屏');
  }
  ,

/*后端查找*/
 Search: function (e) {
   if (this.data.choiceOfSearch[0]==0)
   {
      this.setData
      ({
        blank: true
      })
      
      wx.showToast({
        title: '请选择条件',
        image: '/image/warning.png',
        duration: 2000,
        mask:'true'
      })
      return;
   }
   this.setData
     ({
       blank: false
     })

   wx.pageScrollTo({
     scrollTop: 0
   })
    var that = this;
    //映射
    var rep1 = ["li", "zonga", "zongb"];
    var rep2 = ["floor", "class", "Nweek", "week", "time"];
    var rep3 = ["1-", "2A-", "2B-"];
    var rep4 = ["一", "二", "三", "四", "五", "六", "七"];

    //数据库声明
    var info = this.data.choiceOfSearch;
    var Build = Bmob.Object.extend(rep1[info[0] - 1]);
    var build = new Bmob.Query(Build);

    //数组声明
    var content = new Array();
    content.Nweek = new Array();
    content.Nweek.week = new Array();
    content.Nweek.week.time = new Array();
    //中间变量
    var storage = new Array();

    //筛选条件
    for (var i = 1; i < 6; i++) {
      if (info[i] != 0) {
        build.equalTo(rep2[i - 1], info[i]);
      }
    }
    //上传提交筛选信息到后端
    var operation = new Operation();
    // 添加数据，第一个入口参数是Json数据
    operation.save
    ({
     data:info
      }, 
      {
        success: function (result) {
             console.log('上传成功')
              },
          error: function (result, error) {
            console.log('上传失败！')
              }
        });
    build.limit(1000);
    wx.showLoading({
      title: '请稍候',
    })
    // 查询所有数据
    build.find({
      success: function (results) {
        wx.hideLoading();
        
        for (i = 0; i < results.length; i++) {
          var object = results[i];
          var temp;
          var temp1;
          var temp2;
          //翻译成1-101、2A-102、2B-203形式,8周，星期一
          if (object.get('class') < 10) {
            temp = '0' + object.get('class');
          }
          else {
            temp = object.get('class');
          }

          temp = rep3[object.get('building') - 1] + object.get('floor').toString() + temp.toString();
          temp1 = object.get('Nweek') + '周';
          temp2 = '星期' + rep4[object.get('week') - 1];


          for (var j = 0; j < storage.length; j++) {
            if (temp == storage[j]) {
              if (!content[j].Nweek[object.get('Nweek') - 1]) {
                content[j].Nweek[object.get('Nweek') - 1] = new Object();
                content[j].Nweek[object.get('Nweek') - 1].week = new Array();
              }
              content[j].Nweek[object.get('Nweek') - 1].nname = temp1;
              if (!content[j].Nweek[object.get('Nweek') - 1].week[object.get('week') - 1]) {
                content[j].Nweek[object.get('Nweek') - 1].week[object.get('week') - 1] = new Object();
                content[j].Nweek[object.get('Nweek') - 1].week[object.get('week') - 1].time = [false, false, false, false, false];
              }
              content[j].Nweek[object.get('Nweek') - 1].week[object.get('week') - 1].wname = temp2;
              content[j].Nweek[object.get('Nweek') - 1].week[object.get('week') - 1].time[object.get('time') - 1] = true;
              break;
            }
          }
          if (j == storage.length) {
            content[j] = new Object();
            storage[storage.length] = temp;
            content[j].cname = temp;
            content[j].number = object.get('number');
            content[j].type = object.get('type');
            content[j].Nweek = new Array();
            content[j].Nweek[object.get('Nweek') - 1] = new Object();
            content[j].Nweek[object.get('Nweek') - 1].nname = temp1;
            content[j].Nweek[object.get('Nweek') - 1].week = new Array();
            content[j].Nweek[object.get('Nweek') - 1].week[object.get('week') - 1] = new Object();
            content[j].Nweek[object.get('Nweek') - 1].week[object.get('week') - 1].wname = temp2;
            content[j].Nweek[object.get('Nweek') - 1].week[object.get('week') - 1].time = new Array;
            content[j].Nweek[object.get('Nweek') - 1].week[object.get('week') - 1].time = [false, false, false, false, false];
            content[j].Nweek[object.get('Nweek') - 1].week[object.get('week') - 1].time[object.get('time') - 1] = true;
          }
        }
        console.log(content);

        //修改数据
        that.setData
          ({
            inforlist: content
          });
        console.log(that.data.inforlist);


      },
      error: function (error) {
        console.log("查询失败!");
      }
    });
  },
/*button转化 */
Switch1: function () {
  this.setData
    ({
      openinfor1: false,
      openinfor2: false
    });
},
Switch2: function () {
  this.setData
    ({
      openinfor1: true,
      openinfor2: true
    });
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var year = new Date().getFullYear();
    var month = new Date().getMonth() + 1;
    var day = new Date().getDate();
    if (month > 7 && day > 27 && (year == 2017 || year == 2018)) {
      try{
        var dayNow = new Date().getTime();
        var dayZero = new Date().setFullYear(2017, 7, 27);
        var week = Math.ceil((dayNow - dayZero) / 1000 / 60 / 60 / 24 / 7);
        var choiceOfSearch = that.data.choiceOfSearch;
        var multiIndex_time = that.data.multiIndex_time;     
        choiceOfSearch[3] = week;
        multiIndex_time[0] = week; 
        that.setData({
          choiceOfSearch: choiceOfSearch,
          multiIndex_time: multiIndex_time
        })
        console.log('当前周数为', result);
      }
      catch(e){
        console.log(e)
      }
     
    };

    try {
      var value = wx.getStorageSync('welh')
      if (!value) {
        that.setData({
          wel_value:false
        })
      }
    } catch (e) {
      console.log('读取失败');
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