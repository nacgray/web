## Sad potatoes介绍--21210528 王志勇
**<在开放过程中，遇到了很多离谱的bug，莫名其妙的错位，以及一些对学习网页开发很有帮助的经验，将在此文档介绍>**
### 网页概览
<这只是一个很简单的个人介绍网站，也是网页设计选修课的作业之一，所以并没有花费大量的时间和精力（3-4天开发），通过这一个简单的作业，对网页设计有一个初步的了解>
- 网页布局
    - 顶部是一个导航栏，有两大部分，icon和链接；小地球：实际上是一个超链接，链接到吉大官网"https://www.jlu.edu.cn/";爱心关注图标：点击后表达谢谢；Home图标：点击跳转的首页；中间的五个，第一个点击弹窗个人介绍，剩下的都是超链接，链接到不同的网页进行介绍
    - 左边部分是一个图片轮播；中间2046用的png图片，右下角有个眼神跟着鼠标走的玩偶，桌面有个拿大斧子的小人，中间boy用的png图，旁边是实时倒计时
### 文件介绍
- css
   - 存储各种css样式文件夹
   - all，给experience.html、interesting.html、learning.html、skills.html
   - index，给web.html
   - login，给login.html
- js
   - 存储各种动态效果的javascript代码
   - experience.js、interesting.js、learning.js、skills.js让文本文字逐个按行打印
   - pet.js，桌面小人，gif图，跟着你走的那个
   - login1，登录界面js代码
   - index.js，桌面计时器
   - util.js，左侧图片从上到下滚动
- img/img_nike
   - 各种图片
   - img是背景图片等
   - img_nike，左侧滚动图片<nike鞋子>
- html
  - web.html主界面
  - login.html，登录页面，codepen源码修改，https://codepen.io/features/
  - 其他为四个介绍页面
### 经验总结
- 外联js失效？将所有的js代码写入`window.onload = function () {}`或者`window.addEventListener('load', function () {})`
- js**函数名**不要定义成相同的，一定要有所区别
- 文件取名也要有识别度，不要和关键字重名
- 超链接失效？
- css样式多以修改，找到最好看的位置、字体等