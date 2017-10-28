//app.js
//引入Bmob库
var Bmob = require('utils/bmob.js');
Bmob.initialize("123abf63768d03aba6eaede069d0f7e1", "1e23019d9d04ce2270046b9c9bd502a5");

var BmobSocketIo = require('utils/bmobSocketIo.js').BmobSocketIo;
BmobSocketIo.initialize("123abf63768d03aba6eaede069d0f7e1");

App({
  
  onLaunch: function()
  {
    


    var user = new Bmob.User();//开始注册用户

    var newOpenid = wx.getStorageSync('openid')
    if (!newOpenid) {


      wx.login({
        success: function (res) {
          user.loginWithWeapp(res.code).then(function (user) {
            var openid = user.get("authData").weapp.openid;
            console.log(user, 'user', user.id, res);

            if (user.get("nickName")) {
              // 第二次访问
              console.log(user.get("nickName"), 'res.get("nickName")');

              wx.setStorageSync('openid', openid)
            } else {

              //保存用户其他信息
              wx.getUserInfo({
                success: function (result) {

                  var userInfo = result.userInfo;
                  var nickName = userInfo.nickName;
                  var avatarUrl = userInfo.avatarUrl;

                  var u = Bmob.Object.extend("_User");
                  var query = new Bmob.Query(u);
                  // 这个 id 是要修改条目的 id，你在生成这个存储并成功时可以获取到，请看前面的文档
                  query.get(user.id, {
                    success: function (result) {
                      // 自动绑定之前的账号

                      result.set('nickName', nickName);
                      result.set("userPic", avatarUrl);
                      result.set("openid", openid);
                      result.save();

                    }
                  });

                }
              });


            }

          }, function (err) {
            console.log(err, 'errr');
          });

        }
      });
    }

























    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
 
  getUserInfo: function(cb)
  {
    var that = this
    if (this.globalData.userInfo)
    {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } 
    else 
    {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res)
        {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData:
  {
    userInfo: null,
    wel:true
  }
})
