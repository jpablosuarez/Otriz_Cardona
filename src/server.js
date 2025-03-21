const express =require('express');
const path = require('path');
const app = express();
const port = 8080;
const router = require('./routes/Routes');

app.use(express.static(path.join(__dirname,'views')));
app.use(express.json());
app.use('/',router);

app.listen(port,()=>{
    console.log('servidor activo ' + port)
})