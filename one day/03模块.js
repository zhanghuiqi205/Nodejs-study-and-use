var http = require('http');  //引入http模块
var user = require('./moudle/user'); 
var teacher = require('./moudle/teacher');
http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});// 发送 HTTP 头部 ；内容类型: text/plain;HTTP 状态值: 200 : OK
	if(request.url !=='/favicon.ico'){//清楚第二次访问
		console.log('连接成功');
		user = new user(1,'张三',20);
		teacher = new teacher(1,"老王",50);
		user.enter();
		teacher.enter();
		teacher.teacher(response);//调用自己的方法
		response.end('Hello World\n');	
	}
}).listen(8888);  //监听在8888端口
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');