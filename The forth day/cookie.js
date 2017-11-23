// cookie与session的使用
//cookie的读取cookie-parser

//cookie-encrypter    专门cookie加密
const express = require("express");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
var server = express();

server.use(cookieParser()); //cookie中间件的使用  解析
server.use('/', function (req, res) {
    // req.secret = 'secret'; //签名 字符要与上面解析写的一致
    res.cookie('user', "zhanghuiqi", { //创建cookie
        path: '/aaa', //存放目录
        maxAge: 30 * 24 * 3600 * 1000, //过期时间 30天
        signed: true //加密cookie
    });

    console.log("带签名的", req.signedCookies); //输出带签名的cookie的

    console.log("无签名的cookie", req.cookies); //输出未加密的cookie

    // res.clearCookie("user");  //删除cookie
    res.send('ok');
});
server.listen(8088);