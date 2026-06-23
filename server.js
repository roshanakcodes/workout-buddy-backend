require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const dns = require('node:dns/promises'); 
dns.setServers(["1.1.1.1", "1.0.0.1"]);

//express app
const app = express()
app.use(express.json())
const workoutRoutes = require('./routes/workouts')
//middleware
app.use((req,res, next) =>{
     console.log(req.path, req.method)
     next()
})
//route handler
app.use('/api/workouts', workoutRoutes)


//connect to db
mongoose.connect(process.env.MONG_URL)
  .then(()=>{
    // listening for requests
    app.listen(process.env.PORT, ()=> {
       console.log('Connected to DB & Listening to port 4000 !!')
    })
  })
  .catch((error)=>{
    console.log(error)
  })


