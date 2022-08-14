const express = require('express')
const router = express.Router()
const simModel = require('../models/simulacion.model')


router.post('/',(req,res)=>{
    res.send('Guarda Simulacion en la base de datos del proyecto, Chomines');
});

router.get('/simulaciones',(req,res)=>{
    res.send('Trae los datos de las simulaciones de la base de datos');
});




module.exports={router};
