/* 
body-parser:解析post数据   enctype="application/x-www-form-urlencoded"

app.use(bodyParser.urlencode())

数据在req.body


multer：解析post文件      enctype="multipart/form-data"

multer生成一个对象
var object =  multer({
    dest: './www/uploder'
});

数据在req.file

*/
const express = require("express");
const multer = require("multer");     //解析post文件数据
const fs = require("fs");             //文件模块，用于改文件名字
const pathLib = require("path");      //对路径进行解析

var sever = express();
var objMulter = multer({
    dest: './www/uploder'             //上传的文件地址
});
sever.use(objMulter.single("f1"));    // 获取的模式，为单一模式（当然还有别的模式，比如any,array,fields）
sever.use('/', function (req, res) {
    console.log(req.url,req.file);
    var pathNew = req.file.path + pathLib.parse(req.file.originalname).ext;
    console.log(pathNew);
    fs.rename(req.file.path, pathNew, function (err) {
        if (err) {
            res.send("上传失败");
        } else {
            res.send("上传成功");
        }
    });
});

sever.listen(8088);