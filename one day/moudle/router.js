
var readyfile = require('./readyfile');//引入我所写的读取文件的模块

module.exports ={
	login:function(request, response){
	  function recall(data){
     	   response.write(data);
     	   response.end('Hello World\n');
     }
	 readyfile.readyfile('./moudle/login.html',recall);
	},
	zhuce:function(request, response){
	    function recall(data){
     	   response.write(data);
     	   response.end('Hello World\n');
     }
	 readyfile.readyfile('./moudle/zhuce.html',recall);
	}
}