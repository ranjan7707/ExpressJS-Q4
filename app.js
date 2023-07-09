const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const userLogin = require('./routes/login')
const UserMessage = require('./routes/message')
const fs = require('fs')

app.use(bodyparser.urlencoded({extended:true}))

app.use(userLogin)
app.use(UserMessage)

app.use((req,res,next) => {
    res.status(404).send("<h1>Page Not Found</h1>")
})

app.listen(3000)