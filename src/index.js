
const mongoose = require('mongoose');
const port = 3001
const app = require('./app');
mongoose.connect('mongodb+srv://Nikhilsing:Nikhil1144@cluster0.h5tqvdh.mongodb.net/?retryWrites=true&w=majority', 
{ useNewUrlParser: true,
     useUnifiedTopology: true,
      useFindAndModify: false });

mongoose.connection.once('open', () =>{
    console.log('connection established')
}).on('connectionError',(err) =>{
    console.log(err);
})

app.listen(port, () => console.log(`App listening on port ${port}!`));