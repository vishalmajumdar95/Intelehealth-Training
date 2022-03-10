const fs = require('fs');
const content = "This is my file content";
fs.writeFile("text.txt", content, (err)=>{
    if(err){
        console.log(err);
        return;
    }
})