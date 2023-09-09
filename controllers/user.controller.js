import User from "../models/User.js"

const controller = {
    getUsers: async(req, res)=>{
        let queries = {}
        if(req.query.name){
            queries.name = new RegExp(`^${req.query.name}`, 'i')
        }
        try {
            const users = await User.find(queries)
            if(users.length >0 ){
                return res.status(200).json({
                    success: true,
                    users
                })
            }
            return next(error)
        } catch (error) {
            next(error)
        }
    },
    getUserById: async(req, res) => {
        try {
            const oneUser = await User.findById(req.params.id).populate('itineraries')
            if(oneUser){
                return res.status(200).json({
                    success: true,
                    user: oneUser
                });
            }
            return next(error)
        } catch (error) {
            next(error)
        } 
    },    createUser: async(req, res)=>{
        try {
            const newUser = await User.create(req.body); 
            return res.status(201).json({
                success: true,
                message: 'User created'
            })
        } catch (error) {
            next(error)
        }    
    },
    updateUser: async(req, res) => {
        try {
            await User.updateOne({_id: req.params.id}, req.body)
            return res.status(200).json({
                success: true,
                message: 'User updated successfully'
            })
        } catch (error) {
            next(error)
        }
    },
    deleteUser: async(req, res) => {
        try {
            await User.deleteOne({_id: req.params.id})
            return res.status(200).json({
                success: true,
                message: 'User deleted successfully'
            })
        } catch (error) {
            next(error)
        }
    },
}
export default controller;