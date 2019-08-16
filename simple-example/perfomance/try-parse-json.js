const fs = require('fs')
const fileContents = fs.readFileSync('./traces/trace.js', 'utf8')

const data = JSON.parse(fileContents)
let cats = [];
data["traceEvents"].map((el)=>{
    if(cats.indexOf(el["cat"])!= -1){
        return
    } else {
        cats.push(el["cat"]);
        return
    }
})

console.log(cats)