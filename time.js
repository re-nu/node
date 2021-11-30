const express =require("express")
const fs=require("fs")
const app = express()

const port = 3000

const dat=new Date().toString();

async function create(params) {
 await fs.writeFile(`./timeFiles/time5.txt`,dat,(err)=>{
   if(err){
     console.log("error:",err);
   }
   else
    console.log("file creted")
})
}
create();

function allFiles() {
  fs.readdir("./timeFiles",(err,files)=>{
    return files;
})
}

app.get('/', (req, res) => {
   
  res.send(dat)
  
})

app.get('/getAllFiles', (req, res) => {
  const files=allFiles();
  console.log(files);
    res.send(files);
    
  })

app.listen(port, () => {
  console.log("Example app listening at ",port)
})