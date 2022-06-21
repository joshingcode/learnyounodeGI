let fs = require('fs')

fs.readFile('planet.txt','utf-8',function(err,data){
    if(err) throw data;
    console.log(data);
})