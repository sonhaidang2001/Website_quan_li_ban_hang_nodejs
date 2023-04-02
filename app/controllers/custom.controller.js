const Custom = require('../models/custom.model');
const ApiError = require('../api-error');

exports.create = async (req,res,next) =>{   
    try {
        const newCustom =new Custom({
           username:req.body.username,
           email:req.body.email,
           password:req.body.password,
           address:req.body.address,
           phone:req.body.phone,
        })
        newCustom.save();
        res.status(200).json(newCustom);
     } catch (error) {
        return next(
           new ApiError(500, "you can create a new custom")
        )
     }
 }

exports.findAll = async (req,res,next) =>{
    try {
        const custom = await Custom.find({});
        res.status(200).json(custom);
      } catch (error) {
        return next(
           new ApiError(500, "you can find custom")
        )
      }
}
exports.findOne = async (req,res,next) =>{
   try {
      const {id} = req.params;
      const custom = await Custom.findById(id);
      res.status(200).json(custom);
  } catch (error) {
   return next(
      new ApiError(500, "you can find custom")
   )
  }
}
exports.deleteAll = async (req,res,next) =>{
  
}

exports.delete = async (req,res,next) =>{
   try {
      const {id} = req.params;
      const custom =  await Custom.findByIdAndDelete(id);
      if(!custom){
         return next(
            new ApiError(500, `cannot find any product with ID ${id}`)
         )
     }
      res.status(200).json("custom has been deleted...");
    } catch (error) {
      return next(
         new ApiError(500, "you can delete custom")
      )
    }
 }


exports.update = async (req,res,next) =>{
   try {
      const {id} = req.params;
      const custom = await Custom.findByIdAndUpdate(id, req.body,{new:true});
      // we cannot find any custom in database
      if(!custom){
         return next(
            new ApiError(500, `cannot update any custom with ID ${id}`)
         )
     }
      res.json(custom);      
      
  } catch (error) {
   return next(
      new ApiError(500, "you can update custom")
   )
  }
 }
