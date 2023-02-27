const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());
app.use(express.json());
const port =process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('Hello i can code node!')
})

const users=[
    {id:1,name:"sabana",email:"sabana@gmail.com",phone:"01711396809"},
    {id:2,name:"shabnoor",email:"shabnoor@gmail.com",phone:"01711396809"},
    {id:3,name:"chompa",email:"chompa@gmail.com",phone:"01711396809"},
    {id:4,name:"babli",email:"babli@gmail.com",phone:"01711396809"},
    {id:5,name:"titly",email:"titly@gmail.com",phone:"01711396809"},
    {id:6,name:"putli",email:"putli@gmail.com",phone:"01711396809"},
    {id:7,name:"chatly",email:"chatly@gmail.com",phone:"01711396809"},
];
app.get('/users', (req, res) => {
    if(req.query.name){
const search=req.query.name.toLowerCase();
const matched=users.filter(user=>user.name.toLowerCase().includes(search));
res.send(matched)
    }
    // console.log(req.query)
 else{
    res.send(users)
 }
})
app.get('/users/:id', (req, res) => {
    console.log(req.params)
    const id=parseInt(req.params.id);
    const user=users.find(u=>u.id===id);
  res.send(user)
})
app.post('/users',(req, res)=>{
    console.log("request", req.body)
    const user=req.body;
    user.id=users.length+1;
    users.push(user);
    res.send(user)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
