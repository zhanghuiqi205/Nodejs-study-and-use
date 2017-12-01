
const express =require('express');
const mysql = require("mysql");
// 连接
//createConnection(那台服务器  用户名，密码，库)
var db =mysql.createConnection({host:"localhost",user:"root",password:"151766",database:"20171201"});
// 查询
//query(做什么，回调函数)
//SQL(结构性查询语句)  增 删 改 查
//关键字大写  库表字段需要加上··
/* 
    增 INSERT
    INSERT  INTO `20171201` (`ID`,`username`,``password) VALUES(0,`blue2`,`98765`);
    删  DELETE
    改 UPDATE
    查 SELECT
我们需要使用SQL(结构性查询语句)进行MySQL的操作
*/
db.query("SELECT *FROM `usertable`;",(err,data)=>{
    if(err){
        console.log("出错了",err);
    }else{
        console.log("成功了",data);
        console.log(JSON.stringify(data));
    }
});
