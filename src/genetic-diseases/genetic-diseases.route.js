 //configuracion que van a tener todos los archivos de ruta
const express = require('express');

//controllers
const geneticController = require('./genetic-diseases.controller')

//TODO:saludo 1 se debe ejecutar solo para la ruta de findAll y en ese controlador
//traer el saludo y enviarlo por la respuesta
const saludo1 = (req, res, next) => {
    const saludo1 = "hola son el saludo1"

    req.saludo1 = saludo1
    next()
}


//TODO:saludo 2 se debe ejecutar solo para la ruta de patch y delete y en ese controlador
//traer el saludo y enviarlo por la respuesta
const saludo2 = (req, res, next) => {
    const saludo2 = "hola son el saludo2"

    req.saludo1 = saludo2
    next()
}

const router = express.Router()






//3. definir el endpoint
// endpoit para buscar todas las enfermedades
router.get('/genetic-diseases', geneticController.findAll)

// endpoint para crear una enfermedad genetica
router.post('/genetic-diseases', geneticController.create)


//endpoint para buscar una enfermedad genetica
router.get('/genetic-diseases/:id', geneticController.findOne)    


//endpoint para actualizar una enfermedad genetica
router.patch('/genetic-diseases/:id', geneticController.update)


//endpoint para eliminar una enfermedad genetica
router.delete('/genetic-diseases/:id', geneticController.deleteDisease )



module.exports = router;
