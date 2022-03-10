// const fs = require('fs');
// fs.readFile("text.txt","utf8",(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
// });
// console.log("This should come after reading the file content");


const fs = require('fs');
try{
    const data = fs.readFileSync("text.txt","utf8")
    console.log(data);
}catch{
    console.log(err);
};

console.log("This should come after reading the file content");