

var http = require('http');  //引入http模块
var url = require('url');
var router = require('./moudle/router');
http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
	if(request.url !=='/favicon.ico'){//清楚第二次访问
	
      var pathname = url.parse(request.url).pathname;
      console.log(pathname);//  请求地址的/后面的
      pathname =pathname.replace(/\//,'');//把/去掉；
      router[pathname](request, response); //根据不同的地址，执行不同的方法	
	  response.end('Hello World\n');	
	}
}).listen(8888);  //监听在8888端口
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');