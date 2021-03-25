const path = require('path');
const fs   = require('fs');

const usersPath = path.join(__dirname,'..','model','users.json');

const checkUser = (body) =>{

  return new Promise((resolve,reject)=>{
    const {email,password} = body

    fs.readFile(usersPath,(err,data)=>{
      if(err){
        reject(err)
      }else{
        const foundUser = JSON.parse(data).users.find(item => item.email === email)

        if(!foundUser){
          reject(new Error('Email is wrong'))
        }else{
          if(foundUser.password !== password){
            reject(new Error('Password is wrong'))
          }else{
            resolve('User is Logged in')
          }
          
        }
      }
    })
  })
}


module.exports={
  checkUser
}