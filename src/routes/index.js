const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.render('index.html');
});

router.get('/descripcion', (req, res) => {
    res.render('descripcion.html');
});

router.get('/producto', (req, res) => {
    res.render('productos.html');
});

router.get('/carrito', (req, res) => {
    res.render('carrito.html');
});

router.get('/detallesEnvio', (req, res) => {
    res.render('datosEntrega.html');
});

module.exports = router;
