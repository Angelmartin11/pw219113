const express=  require('express');
const rutas= express.Router();

const customerController = require('../controllers/customerController');

// rutas.get("/", (req,res)=>{
// 	res.send("Hola mundo pero en node jajaja que roio perro");
// });
rutas.get('/',customerController.list);

module.exports = rutas;