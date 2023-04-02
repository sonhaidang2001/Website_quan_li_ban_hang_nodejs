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

exports.findOne = async (req,res,next) =>{
   try {
      const {id} = req.params;
      const product = await Product.findById(id);
      res.status(200).json(product);
  } catch (error) {
   return next(
      new ApiError(500, "you can find product")
   )
  }
}

exports.deleteAll = async (req,res,next) =>{
  
}

exports.delete = async (req,res,next) =>{
   try {
      const {id} = req.params;
      const product = await Product.findByIdAndDelete(id);
      if(!product){
          return res.status(404).json({message: `cannot find any product with ID ${id}`})
      }
      res.status(200).json("product has been deleted...");
      
  } catch (error) {
   return next(
      new ApiError(500, "you can delete product")
   )
  }
 }


exports.update = async (req,res,next) =>{
   try {
      const {id} = req.params;
      const product = await Product.findByIdAndUpdate(id, req.body, {new:true});
      // we cannot find any product in database
      if(!product){
          return res.status(404).json({message: `cannot find any product with ID ${id}`})
      }
      res.json(product);
      // const updatedProduct = await Product.findById(id);
      // res.status(200).json(updatedProduct);
      
  } catch (error) {
   return next(
      new ApiError(500, "you can delete product")
   )
  }
 }
