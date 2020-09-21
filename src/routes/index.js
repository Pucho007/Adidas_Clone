const express = require('express');

const router = express.Router();

const producto=require('../models/producto');

router.get('/', (req, res) => {
    res.render('index.html');
});


router.get('/producto', async(req, res) => {
    const productos=await producto.find();
    res.render('productos.html',{productos});
});


router.get('/producto/:id',async(req,res)=>{
    const {id}=req.params;
    const productoElegido=await producto.findById(id);
   res.render('descripcion.html',{productoElegido});
})


router.get('/carrito', (req, res) => {
    res.render('carrito.html');
});

router.get('/detallesEnvio', (req, res) => {
    res.render('datosEntrega.html');
});

module.exports = router;
