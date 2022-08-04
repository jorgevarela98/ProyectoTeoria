const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const carrosRouter = require('./routers/carros.router')
require('dotenv').config()

/**
 * Middlewares
 * 
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use('/carros', carrosRouter.router)

app.get('/', (req,res)=>{
    res.send('Los meros Sevillistas');
})


puerto = 8088 || process.env.puerto;
host = 'localhost' || process.env.host;

app.listen(puerto, host, ()=>{
    console.log(`Servidor corriendo en http://${host}:${puerto}`)
})