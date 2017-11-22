/**
 * nodejs后台
 * JavaScript前台
 * nodeJS：
 * 优势：性能高   比PHP高86倍
 *      跟前台js合作方便，便于前段学习.js能用的，nodeJS都能用。
 * 切换盘符：e:    
 * 改变当前目录cd   tab补全命令.
 * 执行程序  node   xxx.js
 * nodejs----服务器
 * http----协议(http模块)
 * 文件操作 fs模块file system
 * readFile
 * writeFile
 * 异步：多个操作可以同时进行。前一次的操作没完事，后一次也能开始
 * 同步：一次一个
 * 
 * 数据请求-----
 * 前台：form   ajax  jsonp
 * 后台：一样
 * 前台-----后台    http协议
 * 请求的方式不同：get ：数据在url中    数据解析：自己切split，querystring， url模块
 *               post：如何来接受  post数据量比get大得多。  分段传输
 * 
 *注册和登录：
 * 
 */

const fs = require("fs");
// const urllib = require('url');  //解析地址
 const querystring = require("querystring"); //解析地址
const http = require("http");
var server = http.createServer(function(req, res) {
      console.log("有人来了");
      fs.readFile('a.txt',function(err,data){
        var json =querystring.parse("urse=blue&name=zhanghuiqi&age=18");
        console.log(typeof json);
            res.write("json");
            fs.writeFile("b.txt",data,function(err){
                console.log("写入完成");
            });
            res.end();
      });
});

server.listen(8888);

