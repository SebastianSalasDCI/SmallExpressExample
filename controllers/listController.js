const path    = require('path');
const fs      = require('fs');

const usersPath = path.join(__dirname,'..','model','users.json');

const getUsers = () =>{

  return new Promise((resolve,reject)=>{

    fs.readFile(usersPath,(err,data)=>{

      if(err){
        reject(err) 
      }else{
        //process Data
        const dataMap = JSON.parse(data).users.map(item=>{
          return{
            id: item.id,
            name: item.name,
            age: item.age,
            email:item.email,
            hobbies:item.hobbies
          }
        })

        resolve(dataMap)
      }
    })

  })
}

module.exports = {
  getUsers
}
