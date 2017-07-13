var fs = require('fs');

module.exports = {
	writefile: function(path, data) {
		fs.writeFile(path, data, function(err) {
			if(err) {
				console.log(err);
			}
		});
		console.log("异步写文件完毕");
	},
	writefileSync: function(path, data) {
		fs.writeFileSync(path, data);
		console.log("同步写完件完成");
	},
	readImg: function(path, res) {
		fs.readFile(path, 'binary', function(err, filedata) {
			if(err) {
				console.log(err);
				return;
			} else {
				res.write(filedata, "binary");
				res.end();
			}
		});
	}   //写入图片

}