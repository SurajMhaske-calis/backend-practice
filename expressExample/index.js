const express = require("express");
const app = express();

const port = 3000;

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      }
    ]
  }
];

app.use(express.json());

app.get('/',function(req,res){
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let healthyKidneys = 0;
    for(i=0; i<johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            healthyKidneys+=1;
        }
    }
    let unhealthyKidneys = numberOfKidneys - healthyKidneys;

    res.json({
      numberOfKidneys,
      healthyKidneys,
      unhealthyKidneys
    })
})

app.post('/',function(req,res){
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy : isHealthy
  })
  res.json({
    msg: "Kidney added !"
  })
})

app.put('/',function(req,res){
  for (let i=0; i<users[0].kidneys.length; i++){
    users[0].kidneys[i].healthy= true; 
  }
  res.json({
    msg:"All kidneys are healthy now ."
  });
});

app.delete('/',function(req,res){
  const newKidney = [];
  for(let i=0 ; i<users[0].kidneys.length; i++){
    if(users[0].kidneys[i].healthy){
      newKidney.push({healthy:true})
    }
  }
  users[0].kidneys = newKidney;
  res.json({
    msg:"Removed unhealthy kidney."
  })
})

app.listen(port, ()=>{
  console.log(`App is listening on Port ${port}`)
})

