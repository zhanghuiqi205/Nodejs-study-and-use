

var http = require('http');  //引入http模块
var write = require('./module/write');
http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'image/jpeg'});
	if(request.url !=='/favicon.ico'){//清楚第二次访问		

       write.readImg('./module/01.jpg',response);	
	}
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');