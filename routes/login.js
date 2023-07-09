const express = require('express')
const router = express.Router()

router.get('/login',(req,res) => {
    res.send(` <form action="/login" method="POST" onsubmit="localStorage.setItem('username',document.getElementById('username').value)">
     <input id="username" type="text name="username">
     <button type="submit">login</button>
     </form>`)
})



router.post('/login',(req,res) => {
    //console.log(req.body)
    res.redirect('/')
})

module.exports = router
