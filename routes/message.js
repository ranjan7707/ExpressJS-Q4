

const express = require('express')
const data=[]
const fs = require('fs')

const router = express.Router()

router.get('/',(req,res) => {
    fs.readFile(`message.txt`,(err,data) => {
        if(err){
            console.log(err)
            data = `No chat exists`
        }
        res.send(`${data}<form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')"
        method="POST">

                        <input type="text" id="message" name="message" placeHolder="message">
                        <input type="hidden" id="username" name="username">
                        <button type = "submit">send</button>
                  </form>`        
        )
    })
})

router.post('/',(req,res,next) => {
    data.push(`{${req.body.username}:${req.body.message}}`);
    //console.log(data);
    fs.writeFileSync('message.txt',`${req.body.username}:${req.body.message}`,{flag:'a'},err => {
        console.log(err)
    })

    res.redirect('/')
})

module.exports = router