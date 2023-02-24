const { response } = require('./app')
const userdata =require('./models/data')

//show all data

// const index=(req,res,next) => {
//     marioModel.find().
//     then(response=>{
//         res.json({
//             response
//         })
//     }).catch(error => {
//         res.json({
//             message: "Error while getting data"
//         })
//     })
// }

// get single one

const show =(req,res,next) =>{
    let nameid=req.body.name;
    userdata.findById(nameid).
    then(response=>{
        res.json({
            response
        })
    }).catch(error =>{
        res.json({
            message : "Error Occured"
        })
    })
}


// update by id

const update = (req,res)=>{
   let id=req.body.id
    let updatedData= {
        name: req.body.name,
        location: req.body.location,
        likes: req.body.likes,
        description: req.body.description,
        PostImage: req.body.PostImage,
        date: req.body.date
    }
    

    userdata.findByIdAndUpdate(id, updatedData)
    .then(()=>{
        res.json({
            message : "Data updated Successfully"
        })
    }).catch(()=>{
        res.json({
            message: " Error while updating"
        })
    })
}

// Delete data

const destroy = (req,res)=>{
    let id=req.body.id
    userdata.findByIdAndRemove(id)
    .then(()=>{
        res.json({
            message : "id deleted Successfully"
        })
    }).catch(error =>{
        res.json({
            msg : "An error occured"
        })
        res.status(400)
        // res.send("Id does not match")
    })
}

module.exports ={
    show , update , destroy
}