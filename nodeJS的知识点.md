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
12. cookie和session的使用：cookie存在浏览器端(客户端)
    - [x] 为什么要使用这些。http协议传输是无状态的.
    - [x] cookie在浏览器保存一些数据。每次请求都会带过来。不太安全，空间有限(4k).cookie空间非常小，要省着用.
    - [x] 第一次访问服务器，cookie是空的。服务器会给浏览器种植一个cookie。
    - [x] cookie中会有一个session的ID.服务器就是利用sessionid找到session文件读取，写入。
    - [x] 存在session劫持。
    - [x] 发送cookie。res.cookie(填写对应的信息)，其中的singed：tue代表签名;例如：path路径,maxAge：毫秒数.
    - [x] cookie加密：我们需要cookie-parser这个中间件，cookieParser('签名字符串');
    - [x] 读取cookie,我们需要cookie-parser这个中间件;
    - [x] req.cookies:未签名的cookie;req.signedCookies 签名版的cookie读取
    - [x] 删除cookie，res.clearCookie(名字);就可以删除自己想删除的cookie.
    - [x] cookie-encrypter:加密cookie的中间件.
13. session：保存数据，保存在服务器端。相对安全，空间无限。是基于cookie实现的.通过cookie-session中间件使用.
    - [x] 写入：req.session;使用keys。session也有签名.也有有效期.
    - [x] 删除：delete  res.session["名字"];
14. post数据不仅仅是数据，也可能是文件上传，这里我们介绍form中的enctype中的三种传输。
```
enctype="application/x-www-form-urlencoded";//上传值   中间件：body-parser   数据在req.body中
enctype="multipart/form-data";      //分隔为多个部分   中间件：multer 数据在req.files中
enctype="text/plain";  //一般用途不多，纯文本
body-parser:解析post数据
multer：解析post文件(先生成一个对象，然后可以指定上传文件的路径,上传文件的类型)
```
15. fs模块有重命名的功能，fs.rename("原始文件名","新的文件名",function(err){
                    代码块
    });
16. path模块的使用，里面有很多参数：root, dir,name,base等等。可以从中获取我们想要的信息。
17. 中间件的consolidate，功能：统一模板引擎的识别.整合大部分的模板引擎。下载并引入就可以使用.

```
引入：
const consolidate = require("consolidate");
配置和使用：
-1 输出什么东西
server.set("view engine","html");
-2 模板文件在哪里
server.set("view","./views");//模板文件目录
-3 我们使用什么模板引擎
server.engine("html",consolidate.ejs);
```
18. router(路由的使用)：把大型的网站拆分为一个一个的模块,把不同的目录，对应到不同的模块。一个字就是：拆。
19. Router的使用：express.Router();把router加入到服务器中。
20. 网站的数据放在哪里呢？一般放在数据库.数据库的种类比较多。比如：MySQL(免费，中小网站首选。性能不错),Oracle(金融，大公司的大型应用，收费。性能很不错),SQL,Access(忽略,太差),db2等等。
21. 文件型的：sqlite，mongodb等。
22. 接下来我们开始学习MySQL.分为Sever端  Client端
23. Navicat来管理数据库的。
24. 数据库的基本概念：两种单位：库(文件夹)用来管理的。本身无法存数据;表:(文件),存数据的。
25. 表：长得很像Excel。分为行和列;行：一条数据;列(字段，区域)：一个数据项。
26. 主键：唯一，性能高。唯一识别符。
27. nodeJS是不支持MySQL.那么我们需要借助模块。npm install mysql
28. 然后 const mysql =require('mysql');
28. 然后我们连接:var   db = mysql.createConnetion({host:"哪台服务器",user:"用户名",password:"密码",database:"库"});
29. 然后：查询.
```
db.query(SQL语句,function(err,data){})   //query(干啥,回调)

```
30. SQL:四大查询语句：增删改查.标准写法：关键字大写;库，表，字段需要加上``.
```
增：instert
INSERT INTO 表(字段列表) VALUES(值列表)
删：DELETE
改：uodate
查：SELECT
SELECT 什么 FROM 表

```
31. 







