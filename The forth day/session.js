//session  存在服务器   
// 不能独立存在，基于cookie
//cookie-session  中间件

const express = require("express");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
var server = express();
server.use(cookieSession({
    name: "zhanghuiqi",      //session名字
    maxAge: 2 * 3600 * 1000, //session保存时间   
    keys: ["111", "222", "333", "444"]  //密钥
}));                                       //引入第三方插件

server.listen(8088);
server.use('/', function (req, res) {
    if (req.session['count'] == null) {
        req.session['count'] = 1;
    } else {
        req.session['count']++;
    }
    console.log(req.session['count']); //
    console.log(req.session);         //打印session访问网站次数
    delete req.session;
    res.send('ok');
});

