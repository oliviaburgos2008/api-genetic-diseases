//1. importar express

const express = require('express');
 
// import { Express } from "express";

//2.Creamos una constante app que  tendra
// todas las funcionalidades de express

const app = express();

app.use(express.json()) //permitir poder obtener  el body en formato json
app.use(express.urlencoded({ extended: true})) //permitir poder obtener  el body en formato en url



//definicion de funciones

const findAll = (req, res) => {
    
    return res.status(200).json({
        message: 'method get findAll'
    })
}


const create = (req, res) => {
    const  disease = req.body
    //    const { enfermedad, especie, raza}  = req.body
    
    //    console.log(enfermedad)
    
        return res.status(201).json({
            message: 'method post - create',
            data: disease
        })
}



//3. definir el endpoint
// endpoit para buscar todas las enfermedades
app.get('/api/v1/genetic-diseases', findAll)




// endpoint para crear una enfermedad genetica
app.post('/api/v1/genetic-diseases', create)


//endpoint para buscar una enfermedad genetica
app.get('/api/v1/genetic-diseases/:id', (req, res) => {

    console.log(req.params)

    return res.status(200).json({
        message: 'method get - findOne',
        id: req.params.id
    })
    
})

//endpoint para actualizar una enfermedad genetica
app.patch('/api/v1/genetic-diseases/:id', (req,res) => {

    const { id} = req.params

    return res.status(200).json({
        message: 'method patch - update',
        id, 
    })
})


app.delete('/api/v1/genetic-diseases/:id', (req, res) => {

    
    const { id} = req.params

    return res.status(200).json({
        message: 'method delete - delete',
        id,
    })
})


//4. poner a escuchar el servidor por un puerto
 app.listen(3000, () => {
    console.log("Server running on port" + 3000)
 })

