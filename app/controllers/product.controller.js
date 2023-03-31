const Product = require('../models/product.model');
const ApiError = require('../api-error');

exports.create = async (req,res,next) =>{   
   try {
      const newProduct =new Product({
         name:req.body.name,
         description:req.body.description,
         cost:req.body.cost,
         note:req.body.note,
         supplier:req.body.supplier,
      })
      newProduct.save();
      res.status(200).json(newProduct);
   } catch (error) {
      return next(
         new ApiError(500, "you can create a new product")
      )
   }
 }

exports.findAll = async (req,res,next) =>{
   try {
      const product = await Product.find({});
      res.status(200).json(product);
    } catch (error) {
      return next(
         new ApiError(500, "you can find product")
      )
    }
}
exports.deleteAll = async (req,res,next) =>{
  
}
exports.findOne = async (req,res,next) =>{
  
}
exports.delete = async (req,res,next) =>{
  
 }


exports.update = async (req,res,next) =>{
  
 }
