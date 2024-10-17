const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/getUserQuery',(req,res)=>{
  console.log('get query data: ',req.query);
  res.send('some data from getUserQuery...')
})

app.post('/postUserQuery',(req,res)=>{
  console.log('post query data: ',req.query);
  res.send('some data from postUserQuery...')
})

app.get('/getUserParams/:name/:age',(req,res)=>{
  console.log('get params data: ',req.params);
  res.send('some data from getUserParams...')
})

app.post('/postUserParams/:name/:age',(req,res)=>{
  console.log('post params data: ',req.params);
  res.send('some data from postUserParams...')
})

app.post('/postUserBody',(req,res)=>{
  console.log('post body data: ',req.body);
  res.send('some data from postUserBody...')
})

app.post('/postUserQueryParamsBody/:name',(req,res)=>{
  console.log('all request data: ',req.query,'-',req.params,'-',req.body);
  res.send('some data from postQueryParamsBody...')
})

// app.get("/:universalURL", (req, res) => {
//   res.send("404 URL NOT FOUND");
// });

app.listen(8080,(err)=>{
  if(!err) console.log('server start up successfully...');
})