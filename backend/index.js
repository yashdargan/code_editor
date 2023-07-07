const express = require('express');
const { generateFile } = require('./genearteFile');
const { executeCpp } = require('./executeCpp')
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.get('/',(req,res)=>{
 return res.json({hello:"world"});
});

app.post("/run",async (req,res)=>{
//if language pass as empty the default value is cpp//
  const { language="cpp",code } = req.body; 

  //if code pass as empty the error generated//
  if (code===undefined){ return res.status(400).json({success:false,error:"empty code body"});}
  //need to generate a c+++ file and send the response//run/ 
    const filepath =  await generateFile(language,code);
  //we need to run and send the response//
  const output = await executeCpp(filepath);

  return res.json({filepath,output});
  
 });

app.listen(5000,()=>{
  console.log('listening on port 5000!');
});


