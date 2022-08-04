const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config()

app.use(cors({credentials: true, origin: '*'}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



app.get('/', (req,res)=>{
    res.send('Los meros Sevillistas');
})


puerto = 8088 || process.env.puerto;
host = 'localhost' || process.env.host;

app.listen(puerto, host, ()=>{
    console.log(`Servidor corriendo en http://${host}:${puerto}`)
})