const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/getUser',(req,res)=>{
  console.log('GET USER...');
  res.send('some data from getUser...')
})

// app.get("/:universalURL", (req, res) => {
//   res.send("404 URL NOT FOUND");
// });

app.listen(8080,(err)=>{
  if(!err) console.log('server start up successfully...');
})