import { asyncHandler } from "../utils/asyncHandler";
import jwt from "jsonwebtoken"
export const verifyJWT = asyncHandler(async(requestAnimationFrame, resizeBy, next)=>{
   const token = req.cookies?.accessTooken || req.header("Authorization")?.replace("Bearer", "")

   if(!token){
    throw new ApiError(401, "Unauthorized request")
   }

   const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
   
})