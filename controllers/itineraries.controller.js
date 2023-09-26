import Itinerary from "../models/Itinerary.js"

const controller = {
    getItineraries: async(req, res) => {
        let queries = {} 
        if(req.query.itinerary){
            queries.itinerary = new RegExp(`^${req.query.itinerary}`, 'i')
        }

        try {
            const itineraries = await Itinerary.find(queries)
            if(itineraries.length > 0 ){
                return res.status(200).json({
                    success: true,
                    itineraries
                })
            }

            return next(error)
        } catch (error) {
            next(error)
        }
    },

    getItineraryById: async(req, res) => {
        try {
            const oneItinerary = await Itinerary.findById(req.params.id).populate('activities').populate('user').populate({path: 'comments', populate:{ path: 'user',select:'name image'}})
            if(oneItinerary){
                return res.status(200).json({
                    success: true,
                    itinerary: oneItinerary
                });
            }
            return next(error)
        } catch (error) {
            next(error)
        } 
    },

    createItinerary: async(req, res) => {
        try {
            const newItinerary = await Itinerary.create(req.body); 
        
            return res.status(201).json({
                success: true,
                message: 'Itinerary created'
            })
        } catch (error) {
            next(error)
        }        
    },
    updateItinerary: async(req, res) => {
        try {
            await Itinerary.updateOne({_id: req.params.id}, req.body)
            return res.status(200).json({
                success: true,
                message: 'Itinerary updated successfully'
            })

        } catch (error) {
            next(error)
        }
    },
    deleteItinerary: async(req, res) => {
        try {
            await Itinerary.deleteOne({_id: req.params.id})
            return res.status(200).json({
                success: true,
                message: 'Itinerary deleted successfully'
            })
        } catch (error) {
            next(error)
        }
    },
}
export default controller;