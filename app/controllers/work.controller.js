const Work = require('../models/work.model')
const ApiError = require('../api-error');

exports.create = async (req,res,next) =>{   
   try {
      const newWork = new Work({
         name:req.body.name,
         description:req.body.description
      })
      newWork.save();
      res.status(200).json(newWork);
   } catch (error) {
      return next(
         new ApiError(500, "you can't create a new work")
      )
   }
 }

exports.findAll = async (req,res,next) =>{
   try {
      const work = await Work.find({});
      res.status(200).json(work);
    } catch (error) {
      return next(
         new ApiError(500, "you can't find work")
      )
    }
}

exports.findOne = async (req,res,next) =>{
   try {
      const {id} = req.params;
      const work = await Work.findById(id);
      res.status(200).json(work);
  } catch (error) {
   return next(
      new ApiError(500, "you can't find work for id")
   )
  }
}

exports.deleteAll = async (req,res,next) =>{
  
}

exports.delete = async (req,res,next) =>{
   try {
      const {id} = req.params;
      const work =  await Work.findByIdAndDelete(id);
      if(!work){
         return next(
            new ApiError(500, `cannot find any product with ID ${id}`)
         )
     }
      res.status(200).json("work has been deleted...");
    } catch (error) {
      return next(
         new ApiError(500, "you can delete work")
      )
    }
 }


exports.update = async (req,res,next) =>{
   try {
      const {id} = req.params;
      const work = await Work.findByIdAndUpdate(id, req.body,{new:true});
      // we cannot find any work in database
      if(!work){
         return next(
            new ApiError(500, `cannot update any work with ID ${id}`)
         )
     }
      res.json(work);      
      
  } catch (error) {
   return next(
      new ApiError(500, "you can't update work")
   )
  }
 }    
