const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 3002

app.use(bodyParser.json())

app.get('/', (req,res) =>{
    res.send("Hello from First server")
});

app.post('/conversation',(req,res)=>{
    const msg= req.body.message;
    console.log(msg);

    //perform backend operation
    res.json({
        output: "2 + 2 = 4"
    })
})

app.listen(port,()=>{
    console.log(`App is listning on ${port}`) //template literal(``) used to get port value
});