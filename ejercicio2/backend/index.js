const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const carrosRouter = require('./routers/carros.router');
const modelosRouter = require('./routers/modelos.router');
const simRouter = require('./routers/simulacion.router');
require('dotenv').config();

/**
 * Middlewares
 * 
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
/**
 * Middlewares para las rutas
 */
app.use('/carros', carrosRouter.router);
app.use('/modelos', modelosRouter.router);
app.use('/simulacion', simRouter.router);


app.get('/', (req,res)=>{
    res.send('Los meros Sevillistas');
})


puerto = 8088 || process.env.puerto;
host = 'localhost' || process.env.host;

app.listen(puerto, host, ()=>{
    console.log(`Servidor corriendo en http://${host}:${puerto}`)
})
