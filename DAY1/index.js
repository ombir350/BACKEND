require('dotenv').config()
const express = require('express');
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('ombir kumar')
})

app.get('/twitter', (req,res)=>{
    res.send("ombir@1234")
})

app.get('/login', (req,res)=>{
    res.send("this is forst server which is devloped by me!")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})