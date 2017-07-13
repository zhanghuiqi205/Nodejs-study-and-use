

var http = require('http');  //引入http模块
var write = require('./module/write');
http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
	if(request.url !=='/favicon.ico'){//清楚第二次访问		
//		write.writefileSync('./module/one.txt',"我是同步写文件");
		write.writefile('./module/two.txt',"我是异步写文件");		
		response.end('Hello World\n');	
	}
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');