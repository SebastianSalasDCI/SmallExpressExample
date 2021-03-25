const express = require('express');
const router  = express.Router();
const registerController = require('../controllers/registerController')

router.post('/',(req,res)=>{

  const body = req.body;

  registerController.saveUser(body)
  .then(response=>{
    res.send(response)
  })
  .catch(error=>{
    console.log(error)
    res.send('Error saving the user')
  })

})

module.exports = router;
