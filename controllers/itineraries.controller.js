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

            return res.status(404).json({
                success: false,
                message: "We can't find the Itinerary"
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                succes: false,
                message: 'Error getting the itineraries'
            })
        }
    },

    getItineraryById: async(req, res) => {
        try {
            const oneItinerary = await Itinerary.findById(req.params.id).populate({
                path: 'user',
                path: 'activities'})
            
            if(oneItinerary){
                return res.status(200).json({
                    success: true,
                    itinerary: oneItinerary
                });
            }
            return res.status(404).json({
                success: false,
                message: 'Error getting the Itinerary'
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                succes: false,
                message: 'Error getting the Itinerary'
            })
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
            console.log(error);
            return res.status(500).json({
                succes: false,
                message: 'Error creating the Itinerary'
            })
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
            console.log(error);
            return res.status(500).json({
                succes: false,
                message: 'Error trying to update the Itinerary'
            })
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
            console.log(error);
            return res.status(500).json({
                succes: false,
                message: 'Error trying to delete the Itinerary'
            })
        }
    },
}
export default controller;