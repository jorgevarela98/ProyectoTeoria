const express = require('express')
const router = express.Router()
const simModel = require('../models/simulacion.model')


router.post('/',(req,res)=>{
    simModel.insertarSimulacion(req.body).catch(err=>{
        res.status(500).send(err)}).finally(()=>{
            res.status(203)});
});

router.get('/simulaciones',(req,res)=>{
    res.send('Trae los datos de las simulaciones de la base de datos');
});

router.get('/simulacion/:id',(req,res)=>{
    res.send('Trae los datos de una sola simulacion')
});



module.exports={router};
