var fs = require("fs");//引入文件操作模块
module.exports ={
	readyfile:function(path,recall){  
	   fs.readFile(path,function(err, data){
	   	 if(err){
	   	 	console.log(err);
	   	 }else{
	   	 	recall(data);
	   	 }
	   });
     console.log("异步方法执行完毕");
	},
	
    readyfileSync:function(path,res){
	  var data =  fs.readFileSync(path,"utf-8");
	  res.write(data);
	  console.log("同步方法执行完毕");
	}    
}
