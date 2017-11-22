/**
 * 
 * 断言：assert
 * buffer：二进制
 * child processes 子进程
 * crypto:加密（md5,sha256）
 * dns:域名解析
 * domain：废弃掉了
 * Errors：错误
 * Events:事件
 * https：
 * modules
 * net:网络操作
 * os:操作系统信息
 * Path:处理文件路径
 * process：进程信息
 * stream：流操作
 * timers：定时器
 * tty：
 * util：工具类
 * vm：虚拟机
 * zlib:压缩的
 * 
 * 自定义模块：
 * 
 * 引入自己的模块--------加上./  如果不加，那就放在node_modules
 * 对外输出东西------必须加给exports
 * .js可以省略
 * npm：nodeJS package manager(nodeJS包管理器)
 * 统一下载路径
 * 自动下载依赖
 */
// require:请求：引入其他模块
//  module : 模块(批量输出)
// exports： 输出（单个输出）
const express =require("express");
const expressStatic =require('express-static');
var bodyParse =require("body-parser");
var sever =express();
sever.listen(8088);
// sever.use(expressStatic('./www'));



sever.use('/a.html',function(req,res,next){
    console.log(1111);
    req.a =12;
    next();    //链式操作
});
var users={
  "zhanghuiqi1":"123",
  "zhanghuiqi2":123,
  "zhanghuiqi3":123
};
sever.use('/a.html',function(req,res){    //get 请求
    console.log(2222);
    console.log(req.a);
    var user = req.query["user"];
    var pass =req.query["pass"];
   if(users[user]==null){
       res.send({OK:false,msg:"此用户不存在"});
   }else{
       if(users[user]!=pass){
           res.send({OK:false,msg:"密码输入不正确"});
       }else{
        res.send({OK:true,msg:"登录成功"});
       }
   }
    // console.log(user,pass); 
    // res.send({"names1":"xiaoming1","tt1":"121"});
});

sever.use(bodyParse.urlencoded({    //post请求
       extended:false,  //扩展模式
       limit:  2*1024*1024        //限制2M
}));
sever.use('/b.html',function(req,res){
    console.log("post传输");
    console.log(req.body);
    res.send("post成功");
});