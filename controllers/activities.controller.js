import Activity from "../models/Activity.js";

const controller = {
    getActivities: async(req, res) => {
        let queries = {} 
        if(req.query.activity){
            queries.activity = new RegExp(`^${req.query.activity}`, 'i')
        }


        try {
            const activities = await Activity.find(queries)
            if(activities.length > 0 ){
                return res.status(200).json({
                    success: true,
                    activities
                })
            }

            return next(error)
        } catch (error) {
            next(error)
        }
    },

    getActivityById: async(req, res) => {
        try {
            const oneActivity = await Activity.findById(req.params.id)
            
            if(oneActivity){
                return res.status(200).json({
                    success: true,
                    activity: oneActivity
                });
            }
            return next(error)
        } catch (error) {
            next(error)
        } 
    },

    createActivity: async(req, res) => {
        try {
            const newActivity = await Activity.create(req.body); 
        
            return res.status(201).json({
                success: true,
                message: 'Activity created'
            })
        } catch (error) {
            next(error)
        }        
    },
    updateActivity: async(req, res) => {
        try {
            await Activity.updateOne({_id: req.params.id}, req.body)
            return res.status(200).json({
                success: true,
                message: 'Activity updated successfully'
            })

        } catch (error) {
            next(error)
        }
    },
    deleteActivity: async(req, res) => {
        try {
            await Activity.deleteOne({_id: req.params.id})
            return res.status(200).json({
                success: true,
                message: 'Activity deleted successfully'
            })
        } catch (error) {
            next(error)
        }
    },
}
export default controller;
