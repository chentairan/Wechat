<html>
<body>
<h1>BIT教室项目：</h1>
<br/>
<h2>按照三方面来进行维护，目前人手较少，所以没有明确分工。</h2>
<h3><b>需要设计和开发人员</b></h3>
<p><b>关于设计：</b>要求熟悉BIT教室小程序的定位，熟悉小程序设计规范（参见官方文档），有审美，可以快速制作出原型界面（推荐使用Adobe XD）</p>
<p><b>关于开发：</b>熟练js，开发逻辑层或熟练交互设计的实现，对CSS样式熟练</p>
<img src="https://github.com/chentairan/Wechat/blob/master/image/组织结构.png">
</p>
<h1><b>日常运营：</b></h1>

<p>
日常数据库的维护、意见反馈信息的统计<br/>
<p>
教室数据：三步走战略（进度30%）：<br/>
1、（谈成）阳光服务队的信息（基础）<br/>
2、（待解决）学院教室审批信息（日常变动）<br/>
3、（待开发）报错机制（突发变动）<br/>
</p>
<p>
活动海报审批：<br/>
需要两人,利用辅助审批小程序查看已上传的海报，分析内容的健康性和真实性。<br/>
点击活动右下角的空心圈或实心圆实现活动信息的审批通过和下架<br/>
</p>

<h1><b>推广宣传：（进度5%）</b></h1>

<p>
1. 调查问卷形式推广<br/>
2. 联系学生组织展开合作、在新生群里宣传推广，甚至取得校方支持<br/><br/>
目前努力联系合作的学生组织有：<br/><br/>
（需要可靠数据作为保证）i北理<br/>
信息与电子学院团委<br/>
北理社联<br/>
校学生会<br/>
（谈成）学业指导中心<br/>
（谈成）阳光服务队<br/>
</p>
<p>宣传形式采用推送方式推出，有更好的也可采纳。低成本高效率。</p>

<h1><b>程序开发：</b></h1>

<h2>历史版本（V0.9.7）存在的问题：</h2>
<p>
1. (基本解决)首页（first）网络请求不稳定.可能原因:服务器不稳定。<br/>
2. (已解决)意见反馈页面反馈成功后，提示时间过短。解决方法：增加延时时间。<br/>
3. (已解决)关于我们页面可滑动。解决办法：修改样式。<br/>
4. (已解决)首页查询到信息后，再次打开小程序信息不会消失，解决办法：暂无。<br/>
5. (已解决)首页切换视图按钮触发区域过小，解决方法：修改view大小。<br/>
6. (长期改善)完善样式信息，加强代码可读性。<br/>
</p>
<h2>历史版本（V0.9.9）存在的问题：</h2>
<p>
1. (已更新)加入上传用户搜索操作数据到后端的功能，目的：根据功能使用频次改善后期小程序的用户体验。<br/>
2. (已更新)改善找教室页初始时空白部分无内容、不协调的问题。<br/>
3. (已更新)完善关于我们，丰富详情介绍（建议连接后端，可做到易更改）。<br/>
4. (已更新)搜索时加入弹窗动画<br/>
5. (已更新)加入清屏功能<br/>
6. (已更新)优化细节<br/>
</p>
<h2>现版本（V1.0.0）需要的更新</h2>
<p>
1. （完成）感谢页面组织的罗列样式<br/>
2. （完成）回归首页默认列表样式<br/>
3. （完成）解决首页方块样式节数可理解性问题<br/>
4. （完成）删除多余动画<br/>
5. （完成）修改logo<br/>
</p>
<h2>未来版本（V1.5.0） 需要的更新</h2>
<p>
1.（完成）首页加入报错机制，与课程表相结合，提高教室使用信息准确率。报错信息为：选择楼、层、教室号、起始和截止周、星期、时间段、是空闲或者是占用，建议单独成表，便于审查<br/>
2.（完成）方块视图样式重新设计<br/>
3.（完成）自动忽略之前周<br/>
4.（等待数据）加入星期六、星期日、最后一节课之后的教室审批信息<br/>
5. (解决)解决Mac、iOS下教室搜索问题<br/>
6. 更改查询单节时的界面逻辑错误<br/>
</p>


<h2>未来版本（V2.0.0）需要的更新</h2>
<p>
1. (开发中)新增 “活动” 功能<br/>
<p>“活动” 功能介绍:</p>
<p>
1. 上传和审批流程：每个人都可以上传活动的海报，需要填写活动名、地点、时间，之后上传到后端，这个时候规定一个状态信息为0，之后后端记录状态信息为0的个数，显示到审批的小红点上的数字上，便于我们进行审批，查看他上传的图片是否正确，之后把状态改成1，就可以推送出去。<br/>
2. 点赞系统：如果人点赞，就会更新点赞人数，我们选取点赞数量最多的海报，显示到小程序刚打开的弹窗上，作为广告。<br/>
3. 海报的无图模式，只显示时间地点名字，形成教室类似的那种卡片式的方式,便于浏览大量信息<br/>
</p>
2. 全新设计<br/>
3.(完成)新增实验室底部tab，将测试的功能(聊聊、活动)收进实验室页面中<br/>
4.(待设计)深度开发聊聊功能，如上传图片、真心话大冒险、表情、个人资料、位置共享、聊天背景、气泡样式等等特性，有待研究。<br/>
</p>


<p>后端文档：http://docs.bmob.cn/data/wechatApp/b_developdoc/doc/index.html</p>
<p>Bmob API文档：http://docs.bmob.cn/data/JavaScript/i_doc/doc/index.html</p>
<p>前端自由发挥</p>
<p>进阶CSS可参考：https://codepen.io</p>