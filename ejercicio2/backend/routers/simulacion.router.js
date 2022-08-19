const express = require('express')
const router = express.Router()
const simModel = require('../models/simulacion.model')


router.post('/',(req,res)=>{
    simModel.insertarSimulacion(req.body).catch(err=>{
        res.status(500).send(err)}).finally(()=>{
            res.status(203)});
});

router.get('/simulaciones',(req,res)=>{
    simModel.obtenerSimulaciones().then((resultado)=>{
        res.send(resultado);
    }).catch((err)=>{
        res.status(500).send(err);
    }).finally(()=>{
            res.status(200);
        
    })
});

router.get('/simulacion/:id',(req,res)=>{
    simModel.obtenerSimulacion(req.params.id).then((resultado)=>{
        res.send(resultado)
    }).catch((error)=>{
        res.status(500).send(error);
    }).finally(()=>{
        res.status(200);
    })
});



module.exports={router};
