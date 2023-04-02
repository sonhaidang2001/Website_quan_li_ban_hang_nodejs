const User = require('../models/user.model');
const ApiError = require('../api-error');

exports.create = async (req,res,next) =>{   
   const user = await User.findOne({username:req.body.username})
   try {
    if (user.username === req.body.username && user.password===req.body.password) {
        res.status(200).json(user);
    }else{
      return next(
        new ApiError(500, "password or username not accuracy")
     )
    }
   } catch (error) {
    res.json(error.message)
    // return next(
    //     new ApiError(500, "you can login contact")
    //  )
   }
 }
exports.findAll = async (req,res,next) =>{
  try {
    user = await User.find({});
    res.status(200).json(user);
  } catch (error) {
    return next(
       new ApiError(500, "you can find contact")
    )
  }
}
exports.findOne = async (req,res,next) =>{
  try {
    const {id} = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
} catch (error) {
 return next(
    new ApiError(500, "you can find user")
 )
}
 }

exports.update = async (req,res,next) =>{
  try {
    const {id} = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, {new:true});
    // we cannot find any user in database
    if(!user){
        return res.status(404).json({message: `cannot find any user with ID ${id}`})
    }
    res.json(user);   
    
} catch (error) {
 return next(
    new ApiError(500, "you can delete user")
 )
}
 }
