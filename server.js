// 1. Import modules and files that I need
const express = require('express');
const logger  = require('morgan');

//routes
const listUserRouter = require('./routes/listUserRouter');
const registerRouter = require('./routes/registerRouter');
const loginRouter    = require('./routes/loginRouter');
//End of 1st Step

// 2. Create express application, use middlewares and configurate the application
const app = express();

//Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}))

// End of 2nd Step


// 3. Define the behaviour of the app, create the routes
app.use('/list',listUserRouter);
app.use('/register',registerRouter);
app.use('/login',loginRouter)

//End of 3rd Step

// 4. Start listening to the port
const PORT = process.env.PORT || 4000;
app.listen(PORT,(err)=>{
  if(err){
    console.log(err)
  }else{
    console.log(`Application listening on port ${PORT}`)
  }
})