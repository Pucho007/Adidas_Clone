const express= require('express');
const path=require('path');
const morgan = require('morgan');
const app= express();
require('./database');




// intializations
require('./database');

// settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);



app.engine('html',require('ejs').renderFile);

// middlewares
app.use(morgan('dev'));

//routes
app.use(require('./routes/index'));

app.use(express.static(__dirname+'/public'));



app.listen(app.get('port'),()=>{
    console.log('Server Connected');
});