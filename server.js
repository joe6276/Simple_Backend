const express = require('express')
const route  = require('./routes')
const app= express()
app.use(express.json())
app.use('/trainee', route)
app.listen(4000, ()=>{
    console.log('Application has Started....');
})