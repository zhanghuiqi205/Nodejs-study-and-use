- 模块化：
  - [x] 系统模块：http，url，fs。
  - assert：断言测试
  - buffer：二进制数据
  - c/c++addons:
  - child processes:子进程
  - Crypto：加密(MD5,sha256)
  - dns:域名解析
  - domain：舍弃
  - errors：各种错误提示
  - events：事件
  - globals：
  - net：各种各样的网络操作
  - OS：跟操作系统的信息
  - Path：处理文件路径
  - Stream：流操作
  - Timers：定时器
  - util：工具类
  - vm：虚拟机
  - zlib：压缩操作
######   nodeJS的模块很多，也很实用。我们会慢慢介绍
- 模块组成：
   - 模块的引入：
    - [x] require:请求;引入模块的;在nodeJS中使用这个，对于自定义的模块引入的时候需要加上./的标志。因为这个可以告诉它这个是nodeJS自己的系统模块，还是你自己写的。如果自己写的模块不想写./，那就把自己的模块加入到node_modules文件夹。require一般先从系统模块找，找不到再去node_modules去找。
    - [x] module：模块。如果对外输出大量的东西和变量。module.exports={};通俗的说就是批量输出的。
    - [x] exports：输出;对外想输出东西加上exports这个变量。例如：exports.a=12;单个输出
    - [x]  module.exports ==  exports是成立的。
   - nodeJS中所有的文件都是.js结尾的，所以引入的时候，可以省略js。
- npm的讲解：
###### nodeJS包管理器。好处：1.统一的下载路径(类似软件管家的平台);2.自动下载依赖;3.如果速度太慢，可以安装淘宝镜像。
- 下载：npm install xxx(下载某一项需求);
- 卸载：npm uninstall xxx(卸载某一项);
- 登录账号： npm login，输入名字和密码
- 提交模块的流程：首先npm init：初始化包的信息package.json;写完自己的模块后，然后发布：npm publish;每次发布的时候更新自己的版本号。更新：npm update;删除自己的模块：npm -force unpublish;
-express框架：(安装，配置，接受请求，响应) express保留了原生的功能.添加了一些方法。增强原有的功能。
###### 安装：npm install express;大家可以看看官网的API;下载完后，引入express模块;const express =require("express");
1. var server = express();创建服务并设置监听接口;server.listen();
2. server.use("url",function(req,res){处理页面的地址
    res.send();
});通过use来处理用户的处理。req和res中的参数是经过express处理过的(增强版)。send功能改进了。
3. express中有get,post,use.三种方法。use属于通吃，get和post都可以。
4. express中有很多实用的插件，所谓的中间件。因为有丰富的插件，所以使用者比较多。
5. 安装express的static的中间件。方便获取静态资源。
6.数据的获取：get和post数据如何获取： express中有req.query获取到get传过来的信息，不需要任何中间件。
7. 对于express中post数据，我们是从req.body中得到。需要中间件来辅助获取。
8. express中的链式操作：需要在回调函数中，声明next，告诉它，我需要链式操作。
9. next代表下一个步骤。把选择权交给了使用者。

```
graph LR
声明next-->使用next
```
10. 在链式操作中next声明后，数据中的req的数据是可以传递的.
11. 当然我们也可以自己去写中间件，用原生的知识去书写自己的中间件。
12. cookie和session的使用：
    - [x] 为什么要使用这些。http协议是无状态的.
    - [x] cookie在浏览器保存一些数据。每次请求都会带过来。






