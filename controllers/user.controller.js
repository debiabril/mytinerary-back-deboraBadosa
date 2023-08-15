import User from "../models/User.js"

const controller = {
    getUsers: async(req, res)=>{
        let queries = {}
        if(req.query.name){
            queries.name = new RegExp(`^${req.query.name}`, 'i')
        }

        /* if(req.query.country){
            queries.country = new RegExp(`^${req.query.country}`, 'i')
        } */

        try {
            const users = await User.find(queries)
            if(users.length >0 ){
                return res.status(200).json({
                    success: true,
                    cities
                })
            }

            return res.status(404).json({
                success: false,
                message: "We can't find the city"
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                succes: false,
                message: 'Error getting the Cities'
            })
        }
    },
    getUserById: async(req, res)=>{},
    createUser: async(req, res)=>{
        try {
            const newUser = await User.create(req.body); 
        
            return res.status(201).json({
                success: true,
                message: 'User created'
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                succes: false,
                message: 'Error creating the User'
            })
        }    
    },
    deleteUser: ()=>{},
}
export default controller;