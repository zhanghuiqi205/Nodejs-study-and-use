var user = require('./user'); //模块的调用
function teacher(id,name,age){
	user.apply(this,[id,name,age]); //继承方法
	this.teacher=function(res){
		res.write(this.name+"讲课");
	}
	
}
module.exports = teacher;
