const axios  = require('axios');
const ApiError = require('../api-error');



exports.product = async (req, res) =>{
    try {
        const respon = await axios.get('http://localhost:5000/products/api/product')
        res.render('product/product',{products:respon.data});           
    } catch (error) {
        return next(
            new ApiError(500, "you can find product")
         )
    }
}

exports.addProduct = async (req, res) =>{
    res.render('product/addProduct')
}

exports.addProductShow = async (req, res) =>{
    try {
        const respon = await axios.post('http://localhost:5000/products/api/product',{
            name:req.body.name,
            description:req.body.description,
            cost:req.body.cost,
            note:req.body.note,
            supplier:req.body.supplier,
        })
        res.redirect('/products');       
    } catch (error) {
        return next(
            new ApiError(500, "you can not create a product")
         )
    }
}
