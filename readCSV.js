var csv = require('csv-parser')
var data = []
var fs = require('fs');

var sum = 0;
var x = 0

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', function (row) {
    data.push(row)
	var num = Number(data[x].vol)  /*enter column name where it says 'vol'*/
	if (!Number.isNaN(num)) {
       sum += num
     }
	 x+=1;
  })
  .on('end', function () {
    console.log('Data loaded')
		 	console.log(sum)
			/*console.log(data)*/
  })