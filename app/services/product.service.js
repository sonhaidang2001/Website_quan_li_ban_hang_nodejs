const axios  = require('axios');
const ApiError = require('../api-error');



exports.product = async (req, res,next) =>{    
    await axios.get('http://localhost:5000/products/api/product')
        .then(respon =>{
            res.render('product/product',{products:respon.data})
        })
        .catch(err =>{
            return next(
                new ApiError(500, "you can find product")
            )
        })
}

exports.addProduct = async (req, res) =>{
    res.render('product/addProduct')
}

exports.addProductShow = async (req, res,next) =>{   
    await axios.post('http://localhost:5000/products/api/product',{
        name:req.body.name,
                description:req.body.description,
                cost:req.body.cost,
                note:req.body.note,
                supplier:req.body.supplier,
    })
    .then(respon =>{
        res.redirect('/products');       
    })
    .catch(err =>{
        return next(
            new ApiError(500, "you can add product")
        )
    })
}

exports.delProduct = async (req, res,next) =>{
    const idProduct = req.params.id;
    await axios.delete('http://localhost:5000/products/api/product/'+idProduct)
    .then(respon =>{
        res.redirect('/products')
    })
    .catch(err =>{
        return next(
            new ApiError(500, "you can delete product")
        )
    })
}

exports.editProduct = async (req, res,next) =>{
    
    await axios.get(`http://localhost:5000/products/api/product/${req.params.id}`)
    .then(respon =>{
        res.render('product/editProduct',{product:respon.data})
    })
    .catch(err =>{
        return next(
            new ApiError(500, "you can find product")
        )
    })
}

exports.updateProduct = async (req, res,next) =>{
//    console.log(req.params);
    await axios.put(`http://localhost:5000/products/api/product/${req.params.id}`,req.body,{new:true})
    .then(respon =>{
        res.redirect('/products')
    })
    .catch(err =>{
        return next(
            new ApiError(500, "you can update product")
        )
    })
}