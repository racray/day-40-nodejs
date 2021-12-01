const express = require('express')
const app = express();

const fs = require('fs');


const PORT = 9000;



app.get("/",async (request,response)=>{

    const fs = require('fs');
    const date = +new Date;
    const date2 = date.toString();
    fs.writeFile('./backup/current-date-time.txt',date2,err=>console.log("completed"));

    fs.readFile('./backup/current-date-time.txt',"utf-8",(err,data)=>console.log(data));
    

})

app.listen(PORT,()=>console.log("app started",PORT));
