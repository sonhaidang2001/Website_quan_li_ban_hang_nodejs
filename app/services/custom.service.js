const axios  = require('axios');
const ApiError = require('../api-error');

exports.addCustom = async (req, res) =>{
    res.render('custom/addCustom');
}
exports.addCustomNew = async (req, res) =>{
    await axios.post('http://localhost:5000/customs/api/custom',{
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        address:req.body.address,
        phone:req.body.phone,
    })
    .then(respon =>{
        res.redirect('/home');       
    })
    .catch(err =>{
        return next(
            new ApiError(500, "you can add custom")
        )
    })
}
exports.delCustom = async (req, res,next) =>{
    const idCustom = req.params.id;
    // console.log(idCustom);
    await axios.delete('http://localhost:5000/customs/api/custom/'+idCustom)
    .then(respon =>{
        res.redirect('/home')
    })
    .catch(err =>{
        return next(
            new ApiError(500, "you can't delete custom")
        )
    })
}

exports.editCustom = async (req, res,next) =>{
    
    await axios.get(`http://localhost:5000/customs/api/custom/${req.params.id}`)
    .then(respon =>{
        res.render('custom/editcustom',{custom:respon.data})
    })
    .catch(err =>{
        return next(
            new ApiError(500, "you can find custom for id")
        )
    })
}

exports.updateCustom = async (req, res,next) =>{
    //    console.log(req.params);
        await axios.put(`http://localhost:5000/customs/api/custom/${req.params.id}`,req.body,{new:true})
        .then(respon =>{
            res.redirect('/home')
        })
        .catch(err =>{
            return next(
                new ApiError(500, "you can't update custom")
            )
        })
    }