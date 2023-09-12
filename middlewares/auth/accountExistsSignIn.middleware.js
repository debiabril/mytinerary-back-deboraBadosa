import User from '../../models/User.js'

export const accountExistsSignIn = async(req,res,next) => {
    const user = await User.findOne({email: req.body.email})
    try {
       if (user) {
            req.user = {
            id: user._id,
            email: user.email,
            image: user.image,
            password: user.password,
            role: user.role,
            is_verified: user.is_verified, 
            online: user.online,
        }
        return next()
    } 
    } catch (error) {
        return next(error)
    }
}
