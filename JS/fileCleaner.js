const fs = require('fs')

fs.readFile('a.txt','utf-8',function (err,data){
    if(err){
        console.error("Error is : ",err);
        return;
    }

    const cleanData = data.trim().replace(/\s+/g,'>')

    fs.writeFile('a.txt', cleanData , (err)=>{
        if(err){
            console.error("Error : ",err);
            return;
        }
        console.log("Cleaning Successful");
        console.log(cleanData);
    })
})