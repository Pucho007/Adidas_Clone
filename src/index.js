const express= require('express');
const path=require('path');
const app= express();

//routes
app.use(require('./routes/index.js'));

app.set('port',4000);
app.set('views',path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'public')));


app.listen(app.get('port'),(req,res)=>{
    console.log('asd');
});