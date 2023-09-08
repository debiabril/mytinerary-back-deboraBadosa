import City from "../models/City.js"

const controller = {
    getCities: async(req, res) => {
        let queries = {} 
        if(req.query.city){
            queries.city = new RegExp(`^${req.query.city}`, 'i')
        }

        /* if(req.query.country){
            queries.country = new RegExp(`^${req.query.country}`, 'i')
        } */

        try {
            const cities = await City.find(queries)
            if(cities.length > 0 ){
                return res.status(200).json({
                    success: true,
                    cities
                })
            }

            return next(error)
        } catch (error) {
            next(error)
        }
    },

    getCityById: async(req, res) => {
        try {
            const oneCity = await City.findById(req.params.id).populate('itineraries')
            
            if(oneCity){
                return res.status(200).json({
                    success: true,
                    city: oneCity
                });
            }
            return next(error)
        } catch (error) {
            next(error)
        } 
    },

    createCity: async(req, res) => {
        try {
            const newCity = await City.create(req.body); 
        
            return res.status(201).json({
                success: true,
                message: 'City created'
            })
        } catch (error) {
            next(error)
        }        
    },
    updateCity: async(req, res) => {
        try {
            await City.updateOne({_id: req.params.id}, req.body)
            return res.status(200).json({
                success: true,
                message: 'City updated successfully'
            })

        } catch (error) {
            next(error)
        }
    },
    deleteCity: async(req, res) => {
        try {
            await City.deleteOne({_id: req.params.id})
            return res.status(200).json({
                success: true,
                message: 'City deleted successfully'
            })
        } catch (error) {
            next(error)
        }
    },
}
export default controller;