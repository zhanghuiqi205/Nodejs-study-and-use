/* 
路由：
把不同的目录，对应到不同的模块
相当于迷你版的小服务器。
拆分模块的功能
*/
const  express =require("express");
var server =express();
server.listen(8089);
var routerUser = express.Router();  //注册一个的express的路由
server.use('/user',routerUser);     //添加一个router到server服务器
  
//目录一
routerUser.get('/index',function(req,res){  //路由内部的分支
   res.send("欢迎来到首页");
});


routerUser.get('/home',function(req,res){    //路由内部的分支
    res.send("欢迎来到主页");
});

//目录二
const routerPass =express.Router();  //注册一个路由
server.use('/pass',routerPass);       // 添加一个router到server服务器

routerPass.get('/main',function(req,res){
   res.send("密码的主页");
});
routerPass.get('/index',function(req,res){
    res.send("密码的首页");
 });


