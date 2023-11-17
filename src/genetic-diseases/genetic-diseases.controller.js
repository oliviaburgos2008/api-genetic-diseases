


//definicion de funciones

 exports.findAll = (req, res) => {
    const { requestTime } = req
        
        return res.status(200).json({
            message: 'method get findAll',
             requestTime
            
        })
    }
    
    
    exports.create = (req, res) => {
        const { requestTime } = req;
        const  disease = req.body
        //    const { enfermedad, especie, raza}  = req.body
        
        //    console.log(enfermedad)
       
            return res.status(201).json({
                message: 'method post - create',
                data: disease,
                requestTime
            })
    }
    
    
    exports.findOne = (req, res) => {
    
        const { requestTime } = req
        
        return res.status(200).json({
            message: 'method get - findOne',
            id: req.params.id,
            requestTime
        })
    }
    
    
    
    exports.update = (req, res) => {
        const { requestTime } = req
        const { id} = req.params
    
        return res.status(200).json({
            message: 'method patch - update',
            id, 
            requestTime
        })
    }
    
    
    exports.deleteDisease = (req, res) => {
        const { requestTime } = req
        const { id} = req.params
    
        return res.status(200).json({
            message: 'method delete - delete',
            id,
            requestTime
        })
    }
    
    // module.exports = {
    //     findAll,
    //     create,
    //     findOne,
    //     update,
    //     deleteDisease
    // }