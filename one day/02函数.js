
var http = require('http');  //引入http模块

var  otherfun = require('./moudle/function'); 

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});// 发送 HTTP 头部 ；内容类型: text/plain;HTTP 状态值: 200 : OK
	if(request.url !=='/favicon.ico'){//清楚第二次访问
		console.log('连接成功');
		// 发送响应数据 "Hello World"
		fun1(response);//调用本文件夹的函数
//		otherfun.fun2(response);
//		otherfun.fun3(response);

        //用字符串调用对应的函数
        otherfun['fun2'](response);
        otherfun['fun3'](response);

		response.end('Hello World\n');	
	}
}).listen(8888);  //监听在8888端口
// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');



function fun1(res){
	res.write('hello,我是fun1');
}
