const express = require('express')
const router = express.Router()
const carrosModel = require ('../models/carros.model')

router.get('/marcas',(req,res)=>{
    carrosModel.getMarcas().then((resultado)=>{
        res.send(resultado);
    }).catch((err)=>{
        res.status(500).send(err);
    }).finally(()=>{
            res.status(200);
        
    })
    
});


module.exports = {router};