const fs=require("fs");

//read file

fs.readFile("./welcome.txt","utf-8",(err,data)=>{
    if(err)
    console.log(err);
    else
    console.log(data);
});

//create the file
// const quote="N0 beauty shines brighter than good heart"
// fs.writeFile("./createdFiles/awesome.txt",quote,(err)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log("file created sussfully");
// });

// add data to awesome file
const newQuote="\n happy people 😊shine brighter 😊"
fs.appendFile("./createdFiles/awesome.txt",newQuote,(err)=>{
    if(err)
    console.log(err);
    else
    console.log("data added  sussfully");
});

//create file with timespan 

// const date=Date.now();
// console.log("date is",Math.floor(date/1000));

const start = Date.now();

console.log('starting timer...');
// expected output: starting timer...

setTimeout(() => {
  const millis = Date.now() - start;

  console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
  // expected output: seconds elapsed = 2
}, 2000);