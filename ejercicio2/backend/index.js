const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config()

/**
 * Middlewares
 * 
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());



app.get('/', (req,res)=>{
    res.send('Los meros Sevillistas');
})


puerto = 8088 || process.env.puerto;
host = 'localhost' || process.env.host;

app.listen(puerto, host, ()=>{
    console.log(`Servidor corriendo en http://${host}:${puerto}`)
})