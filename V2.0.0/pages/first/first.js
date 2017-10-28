// first.js
var Bmob = require('../../utils/bmob.js');
var common = require('../../utils/common.js');
var Operation = Bmob.Object.extend("Operation_data");
var util = require('../../utils/util.js');
var that = this;
var wronglist = [0, 0, 0, 0, 0, 0, 0, 0];/*错误表*/
var stateflag = 0;/*检查state是否输入*/

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
    name: "点击上方选择筛选条件",
    state: true,
    wrong: true,
    Nowweek: 0,
    single: true,
    lessonflag: false,
    lessonnumber: 0,
    floornum: '',
    classnum: '',
    startnum: '',
    endnum: '',
    singleweek: '',
    weeknum: '',
    time: '',
    ra1: 'circle',
    ra2: 'circle',
    ra3: 'circle',
    li: 'wrong_2 li',
    za: 'wrong_2 za', 
    zb: 'wrong_2 zb',
    lessonarray: ['', '一', '二', '三', '四', '五'],
    lesson: '',
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
      ["不选", "星期一", "星期二", "星期三", "星期四", "星期五","星期六","星期日"],
      ["不选", "第一大节", "第二大节", "第三大节", "第四大节", "第五大节"]
    ],
    multiIndex_time: [0, 0, 0],

    /*按钮的选择*/
    x: 275,
    y: 402,


    /*检索条件*/
    choiceOfSearch: [0, 0, 0, 0, 0, 0],
  },
  wel: function () {
    this.setData({
      wel_value: true
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
    choiceOfSearch[0] = e.detail.value[0] + 1;
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
  /* 2 is the time */
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
    var getday = new Date().getDay();
    var NowDay = getday;
    if (getday == 0)
      NowDay = 7;
    this.setData({
      inforlist: null,
      blank: true,
      state:true,
      choiceOfSearch: [0, 0, 0, this.data.Nowweek, NowDay, 0],
      multiIndex_time: [this.data.Nowweek, NowDay, 0],
      multiIndex_classroom: [0, 0, 0],
    })
    console.log('清屏');
  }
  ,

  /*后端查找*/
  Search: function (e) {
    if (this.data.choiceOfSearch[0] == 0) {
      this.setData
        ({
          blank: true
        })

      wx.showToast({
        title: '请选择条件',
        image: '/image/warning.png',
        duration: 2000,
        mask: 'true'
      })
      return;
    }
    var lessonflag = this.data.lessonflag;
    if (this.data.choiceOfSearch[5] != 0) lessonflag = true;
    else lessonflag = false;
    this.setData
      ({
        blank: false,
        state: false,
        lessonflag: lessonflag
      })
    
    if (this.data.choiceOfSearch[5] != 0) {
      this.setData({
        lesson: this.data.lessonarray[this.data.choiceOfSearch[5]],
        lessonnumber: this.data.choiceOfSearch[5]
      })
    }
    console.log('数据为' + this.data.lessonnumber);
    wx.pageScrollTo({
      scrollTop: 0
    })
    var that = this;
    //映射
    var rep1 = ["li", "zonga", "zongb"];
    var rep2 = ["building","floor", "class", "Nweek", "week", "time"];
    var rep3 = ["1-", "2A-", "2B-"];
    var rep4 = ["一", "二", "三", "四", "五", "六", "日"];
    var rep5 = ["多媒体教室", "外语语音室", "普通教室", "多媒体网络教室", "教室备课室", "模拟法庭","外语专业语音室"];
    //数据库声明
    var info = this.data.choiceOfSearch;
    var Build = Bmob.Object.extend('Classroom');
    var build = new Bmob.Query(Build);

    var Wrong = Bmob.Object.extend("wrong");
    var wrong = new Bmob.Query(Wrong);

    //数组声明
    var content = new Array();
    content.Nweek = new Array();
    content.Nweek.week = new Array();
    content.Nweek.week.time = new Array();
    //中间变量
    var storage = new Array();

    //筛选条件
    for (var i = 0; i < 6; i++) {
      if (info[i] != 0) {
        build.equalTo(rep2[i], info[i]);
      }
      if (info[3] == 0) {
        build.greaterThanOrEqualTo('Nweek', that.data.Nowweek);
      }
      if (info[4] == 0) {
        build.greaterThanOrEqualTo('week', that.data.NowDay);
      }
    }

    for (var i = 0; i < 6; i++) {
      if (info[i] != 0) {
        wrong.equalTo(rep2[i], info[i]);
      }
    }
    //上传提交筛选信息到后端
    var operation = new Operation();
    // 添加数据，第一个入口参数是Json数据
    operation.save
      ({
        data: info
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
        console.log(results.length);
        wx.hideLoading();
        if (results.length >= 30) {
          that.setData({
            openinfor1: true,
            openinfor2: true
          })
        }
        else {
          that.setData({
            openinfor1: false,
            openinfor2: false
          })
        }

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
              content[j].Nweek[object.get('Nweek') - 1].week[object.get('week') - 1].time[object.get('time') - 1] = object.get('state');
              break;
            }
          }
          if (j == storage.length) {
            content[j] = new Object();
            storage[storage.length] = temp;
            content[j].cname = temp;
            content[j].number = object.get('number');
            content[j].type = rep5[object.get('type')-1];
            content[j].Nweek = new Array();
            content[j].Nweek[object.get('Nweek') - 1] = new Object();
            content[j].Nweek[object.get('Nweek') - 1].nname = temp1;
            content[j].Nweek[object.get('Nweek') - 1].week = new Array();
            content[j].Nweek[object.get('Nweek') - 1].week[object.get('week') - 1] = new Object();
            content[j].Nweek[object.get('Nweek') - 1].week[object.get('week') - 1].wname = temp2;
            content[j].Nweek[object.get('Nweek') - 1].week[object.get('week') - 1].time = new Array;
            content[j].Nweek[object.get('Nweek') - 1].week[object.get('week') - 1].time = [false, false, false, false, false];
            content[j].Nweek[object.get('Nweek') - 1].week[object.get('week') - 1].time[object.get('time') - 1] = object.get('state');
          }
        }
        console.log(content);
        wrong.find
          ({
            success: function (results) {
              console.log("长度" + content.length);
              console.log("Test" + results.length);
              console.log("Testh" + that.data.choiceOfSearch);
              for (i = 0; i < results.length; i++) {
                var object = results[i];
                var temp;
                var temp1;
                var temp2;
                var flag = that.data.choiceOfSearch;
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
                console.log("temp:" + temp);
                if (object.get('state') == 0) {
                  for (j = 0; j < content.length; j++) {
                    if (content[j].cname == temp) {
                      content[j].Nweek[object.get('Nweek') - 1].week[object.get('week') - 1].time[object.get('time') - 1] = false;
                    }
                  }
                }
                if (object.get('state') == 1) {
                  for (j = 0; j < content.length; j++) {
                    if (content[j].cname == temp) {
                      content[j].Nweek[object.get('Nweek') - 1].week[object.get('week') - 1].time[object.get('time') - 1] = true;
                    }
                  }
                }
              }

              //修改数据
              that.setData
                ({
                  inforlist: content
                });
              console.log(that.data.inforlist);
            },
            error: function (error) {
              console.log("wrong表查询失败");
            }
          });





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
  wrong: function () {
    /*重置*/
    this.setData
      ({
        wrong: !this.data.wrong,
        floornum: '',
        classnum: '',
        startnum: '',
        endnum: '',
        singleweek: '',
        weeknum: '',
        time: '',
        ra1: 'circle',
        ra2: 'circle',
        ra3: 'circle',
        li: 'wrong_2 li',
        za: 'wrong_2 za',
        zb: 'wrong_2 zb',
      })
    wronglist = [0, 0, 0, 0, 0, 0, 0, 0];
  },
  ra1: function () {
    this.setData
      ({
        ra1: 'success',
        ra2: 'circle'
      })
    wronglist[7] = 0;
    stateflag = 1;
    console.log(wronglist);
  },
  ra2: function () {
    this.setData
      ({
        ra2: 'success',
        ra1: 'circle'
      })
    wronglist[7] = 1;
    stateflag = 1;
    console.log(wronglist);
  },
  ra3: function () {
    if (this.data.ra3 == 'circle') {
      this.setData
        ({
          ra3: 'success',
          single: false
        })
    }
    else {
      this.setData
        ({
          ra3: 'circle',
          single: true
        })
    }
  },
  wli: function () {
    wronglist[0] = 1;
    this.setData
      ({
        li: 'wrong_2 li h',
        za: 'wrong_2 za',
        zb: 'wrong_2 zb'
      })
    console.log(wronglist);
  },
  wza: function () {
    wronglist[0] = 2;
    this.setData
      ({
        li: 'wrong_2 li',
        za: 'wrong_2 za h',
        zb: 'wrong_2 zb'
      })
    console.log(wronglist);
  },
  wzb: function () {
    wronglist[0] = 3;
    this.setData
      ({
        li: 'wrong_2 li',
        za: 'wrong_2 za',
        zb: 'wrong_2 zb h'
      })
    console.log(wronglist);
  },
  /*数组wronglist建立*/
  floornum: function (e) {
    var num = parseInt(e.detail.value);
    if (num <= 5 && num >= 1) wronglist[1] = num;
    else wronglist[1] = 0;
    console.log(wronglist);
  },
  classnum: function (e) {
    var num = parseInt(e.detail.value);
    if (1 <= num && num <= 6) wronglist[2] = num;
    else wronglist[2] = 0;
    console.log(wronglist);
  },

  startnum: function (e) {
    var num = parseInt(e.detail.value);
    if (1 <= num && num <= 19) wronglist[3] = num;
    else wronglist[3] = 0;
    console.log(wronglist);
  },

  endnum: function (e) {
    var num = parseInt(e.detail.value);
    if (wronglist[3] <= num && num <= 19) wronglist[4] = num;
    else wronglist[4] = 0;
    console.log(wronglist);
  },

  weeknum: function (e) {
    var num = parseInt(e.detail.value);
    if (num < 1 | num > 7) wronglist[5] = 0;
    else wronglist[5] = num;
    console.log(wronglist);
  },

  time: function (e) {
    var num = parseInt(e.detail.value);
    if (num < 1 | num > 5) wronglist[6] = 0;
    else wronglist[6] = num;
    console.log(wronglist);
  },

  singleweek: function (e) {
    var num = parseInt(e.detail.value);
    if (1 <= num && num <= 19) {
      wronglist[3] = num;
      wronglist[4] = num;
    }
    else {
      wronglist[3] = 0;
      wronglist[4] = 0;
    }
    console.log(wronglist);
  },

  /*send wrong信息*/
  sendinfo: function () {
    var i;
    var wrongflag = 1;/*查重使用 */
    var flag = 1;/*检查输入合法性使用 */
    var Wrong = Bmob.Object.extend("wrong");
    var wrong1 = new Bmob.Query(Wrong);
    var noteinfo = ['请选择教学楼', '楼层', '教室号', '周数', '', '星期', '时间段', '请选择是否空闲'];
    var that = this;
    for (var k = 0; k < 7; k++) {
      if (wronglist[k] == 0) {
        flag = 0;
      }
    }

    if (flag && stateflag) {
      wrong1.find({
        success: function (results) {
          for (i = wronglist[3]; i <= wronglist[4]; i++) {
            wrongflag = 1;
            console.log("共查询到 " + results.length + " 条记录");
            for (var j = 0; j < results.length; j++) {
              var object = results[j];
              /*数据查重 */
              console.log(object.get('building'))
              if (object.get('building') == wronglist[0] && object.get('floor') == wronglist[1]
                && object.get('class') == wronglist[2] && object.get('Nweek') == i
                && object.get('week') == wronglist[5] && object.get('time') == wronglist[6]) {
                wrongflag = 0;
                if (object.get('state') == wronglist[7]);
                else {/*更改wrong中已有过时数据（针对state） */
                  object.set('state', wronglist[7]);
                  object.save();
                }
              }
            }
            console.log(wrongflag);
            if (wrongflag) {
              var wrong = new Wrong();
              wrong.set("building", wronglist[0]);
              wrong.set("floor", wronglist[1]);
              wrong.set("class", wronglist[2]);
              wrong.set("Nweek", i);
              wrong.set("week", wronglist[5]);
              wrong.set("time", wronglist[6]);
              wrong.set("state", wronglist[7]);
              wrong.save(null, {
                success: function (result) {
                  console.log("日记创建成功, objectId:" + result.id);
                },
                error: function (result, error) {
                  // 添加失败
                  console.log('创建日记失败');
                }
              });
            }
          }
          wx.showToast({
            title: '感谢您的报错',
            icon: 'success',
            duration: 2000
          })
          that.setData({
            wrong: true
          })

        },
        error: function (error) {
          console.log("查询失败: " + error.code + " " + error.message);
        }
      });
    }
    else {
      var k;
      var note;
      var flag1 = 1;
      if (wronglist[0] == 0)
        note = noteinfo[0];
      else note = '';
      for (k = 1; k < 7; k++) {
        if (wronglist[k] == 0 && flag1) {
          note = note + '请正确输入';
          flag1 = 0;
        }
        if (wronglist[k] == 0) {
          note = note + noteinfo[k] + ' ';
        }
      }
      if (wronglist[7] == 0) {
        note = note + noteinfo[7];
      }
      console.log(note);
      wx.showModal({
        title: '填写提示',
        content: note,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var year = new Date().getFullYear();
    var month = new Date().getMonth() + 1;
    var day = new Date().getDate();
    if ((month > 7 && year == 2017) || (year == 2018 && month < 2 && day < 22)) {
      try {
        var dayNow = new Date().getTime();
        var dayZero = new Date().setFullYear(2017, 7, 27);
        var weekDay = new Date().getDay();
        var week = Math.ceil((dayNow - dayZero) / 1000 / 60 / 60 / 24 / 7);
        var choiceOfSearch = that.data.choiceOfSearch;
        var multiIndex_time = that.data.multiIndex_time;
        choiceOfSearch[3] = week;
        if (weekDay == 0)
          weekDay = 7;
        choiceOfSearch[4] = weekDay;
        multiIndex_time = [week, weekDay, 0];
        that.setData({
          choiceOfSearch: choiceOfSearch,
          multiIndex_time: multiIndex_time,
          Nowweek: week,
          NowDay: weekDay
        })
        console.log('当前周数为', result);
      }
      catch (e) {
        console.log(e)
      }

    };

    try {
      var value = wx.getStorageSync('welh')
      if (!value) {
        that.setData({
          wel_value: false
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