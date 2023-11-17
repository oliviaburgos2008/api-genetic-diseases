//1. importar express

const express = require('express');
const geneticDiseases = require('./genetic-diseases/genetic-diseases.route')
 
// import { Express } from "express";

//2.Creamos una constante app que  tendra
// todas las funcionalidades de express



const app = express();


const calculateRequestTime = (req, res, next) => {    
    const requestTime = new Date().toISOString();

    req.requestTime = requestTime

    next()
}


app.use(express.json()) //permitir poder obtener  el body en formato json
app.use(express.urlencoded({ extended: true})) //permitir poder obtener  el body en formato en url
app.use(calculateRequestTime)


app.use('/api/v1',geneticDiseases)



//4. poner a escuchar el servidor por un puerto
 app.listen(3000, () => {
    console.log("Server running on port" + 3000)
 })

