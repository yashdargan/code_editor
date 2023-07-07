const fs = require('fs');
const { exec } = require("child_process");
const path = require("path");
const outputPath = path.join(__dirname,"outputs");

if(!fs.existsSync(outputPath)) {return fs.mkdirSync(outputPath, {recursive: true});}

const executeCpp = ( filepath ) => {
  //filtering file name only 7b91b318-c7d2-4639-bb91-06f4233c2f16.cpp
const jobId = path.basename( filepath ).split(".")[0];
  const outPath = path.join(outputPath,`${jobId}.out`);
return new Promise((resolve,reject)=>{
  exec(`g++ ${filepath} -o ${outPath} && cd ${outputPath} && ./${jobId}.out `,
      (error,stdout,stderr)=>{
        error && reject({error,stderr});
        stderr && reject(stderr);
        resolve(stdout);
      });
  });
}
module.exports = { 
executeCpp,
};
