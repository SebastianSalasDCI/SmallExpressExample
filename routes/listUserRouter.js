const express = require('express');
const router  = express.Router();
const listController = require('../controllers/listController')

router.get('/', (req,res)=>{

  listController.getUsers()
  .then(response=>{
    res.json(response)
  })
  .catch(error=>{
    console.log(error)
    res.send('Error in getting the information')
  })

})

module.exports = router;

