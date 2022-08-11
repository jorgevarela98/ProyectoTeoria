const express = require('express')
const router = express.Router()
const modeloModel = require('../models/modelos.model')

router.get('/:id',(req,res)=>{
    modeloModel.getModelo(req.params.id).then((resultado)=>{
        res.send(resultado)
    }).catch((error)=>{
        res.status(500).send(error);
    }).finally(()=>{
        res.status(200);
    })
});

module.exports = {router};