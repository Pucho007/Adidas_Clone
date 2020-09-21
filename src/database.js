const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/ProjectIHC',{
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(db => console.log('DB CONNECTED')).catch(err => console.log(err));
