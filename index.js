const fs = require('fs');

const date = +new Date;
const date2 = date.toString();
console.log(date2);
fs.writeFile('./backup/current-date-time.txt',date2,err=>console.log("completed"));
fs.readFile('./backup/current-date-time.txt',"utf-8",(err,data)=>console.log(data));



