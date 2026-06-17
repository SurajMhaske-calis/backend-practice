const express = require("express")
require('dotenv').config()
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/about',(req,res)=>{
    res.send("You are on About Page")
})

app.listen(process.env.PORT, () => {
  console.log('Server is running on http://localhost:4000')
})