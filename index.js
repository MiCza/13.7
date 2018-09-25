var fs = require('fs');

fs.readdir('.', function(err, data){
	console.log('Names of files:');
	console.log(data);
	fs.writeFile('./directory.txt', data, function(err) {
		 if (err) throw err;
  		console.log('Those are all files in the directory!');
	})
})