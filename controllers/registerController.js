const path = require('path');
const fs   = require('fs');

const usersPath = path.join(__dirname,'..','model','users.json');

const saveUser = (body) =>{
  return new Promise((resolve,reject)=>{
    
    fs.readFile(usersPath,(err,data)=>{

      if(err){
        reject(err)
      }else{
        let newData = JSON.parse(data)

        newData.users.push({
          id:newData.users.length +1,
          ...body
        })

        fs.writeFile(usersPath,JSON.stringify(newData,null,2),(errWrite)=>{

          if(errWrite){
            reject(errWrite)
          }else{
            resolve('User was saved')
          }

        })
      }
    })
  })
}


module.exports = {
  saveUser
}