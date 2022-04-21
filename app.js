const express = require('express');
const { getShareLink } = require('./utils');

// Create an express app and add JSON 
const app = express();
app.use(express.json()); 
app.use(express.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
  res.end('Hello World 1',()=>{
  console.log(`Get Body ${JSON.stringify(req.body)}`)
  });

})

app.post('/webhooks/ready',function (req,res){
    res.end('Thanks for your business POST',()=>{
      console.log(`POST Body ${JSON.stringify(req.body)}`)
      });
    var name = req.body.name;
    if(name == "invoice.create" || name == "invoice.update"){
      var { account_id, object_id } = req.body;  
      getShareLink(account_id,object_id);
    };
  })

  app.listen(3000,()=>{
    console.log("listening on port 3000")
  })

