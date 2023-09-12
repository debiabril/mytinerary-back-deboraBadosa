export const accountHasBeenVerified = async (req,res,next) => {
    if(req.user.is_verified){
        return next()
    }
    return next(error)
 }