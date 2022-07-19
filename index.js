const express = require('express')
const nodemailer = require('nodemailer')
const router = require('./routes')
require('dotenv').config()
const app = express()
const PORT = 3000

app.use(express.json())
app.use('/',router)

app.listen(PORT,()=>{
    console.log(`connected to localhos at port ${PORT}`)
})