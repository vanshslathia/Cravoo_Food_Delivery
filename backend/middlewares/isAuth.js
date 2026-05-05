import jwt from "jsonwebtoken"
const isAuth=async (req,res,next) => {
    try {
        const cookieToken=req.cookies?.token
        const headerToken=req.headers?.authorization?.startsWith("Bearer ")
            ? req.headers.authorization.split(" ")[1]
            : null
        const token=cookieToken || headerToken
        if(!token){
            return res.status(401).json({message:"Unauthorized: token not found"})
        }
        const decodeToken=jwt.verify(token,process.env.JWT_SECRET)
        if(!decodeToken){
 return res.status(401).json({message:"Unauthorized: token verification failed"})
        }
        req.userId=decodeToken.userId
        next()
    } catch (error) {
         return res.status(401).json({message:"Unauthorized: invalid token"})
    }
}

export default isAuth