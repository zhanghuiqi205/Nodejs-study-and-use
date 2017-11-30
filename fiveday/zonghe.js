const express = require("express");
const expressStatic = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require("multer");   //上传图片的模块
const jade = require('jade');
const ejs = require('ejs');
const considate =require("consolidate");  //模板引擎的图书馆

/* 
bodyParser
*/
var server = express();   //注册服务
server.listen(8088);      //监听端口

//1.解析cookie
server.use(cookieParser('asfdfa'));

// 2.使用seesion
var arr = [];   
for(var i=0;i<10000;i++){
    arr.push("keys_"+Math.random());
}
server.use(cookieSession({
    name:"zhq520",
    keys:arr,
    maxAge:20*3600*1000
}));

//3.post数据

server.use(bodyParser.urlencoded({  //上传post数据
   extended:false
}));

server.use(multer({
    dest: './www/uploder'          //上传的文件地址
}).any());

//用户请求
// server.use('/',function(req,res,next){
   
//  console.log(req.query,req.body,req.cookies,req.session);

// });

//4.配置模板引擎
//输出什么东西：
server.set("view engine","html");
//模板引擎 模板文件在什么地方：
server.set('views','./www/');
//使用什么模板引擎：
server.engine("html",considate.ejs);

server.get('/index',function(req,res){
    console.log(111);
    //你用的什么文件，你需要的数据
    res.render("d.ejs",{name:"zhanghuiqi"}); //渲染数据
}); 

//5.staic数据
server.use(expressStatic('./www'));



