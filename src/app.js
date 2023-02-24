const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const userdata = require('./models/data');
const datacontroller = require("./controllers")
const cors = require("cors");
app.use(cors())
// Middlewares
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const Data=userdata.find({})

function adddatatomongo(req,res){
    let newdata=new userdata();
    newdata.name=req.body.name;
    newdata.location=req.body.location;
    newdata.likes=req.body.likes;
    newdata.description=req.body.description;
    newdata.PostImage=req.body.PostImage;
    newdata.date=req.body.date
    let save = newdata.save()
    
}

// get all data
app.get('/data',(req,res)=>{
    Data.exec(function(err,data){
        if(err)throw err;
        res.send(data)
        res.status(200)
    })
})

// get only one by id
app.post('/data/:id', datacontroller.show )
// save new name
app.post('/data',(req,res)=>{
res.status(201)
res.send("newly saved Mario character")
adddatatomongo(req,res)
})


app.patch('/data/:id', datacontroller.update)

app.delete('/data/:id', datacontroller.destroy)


module.exports = app;