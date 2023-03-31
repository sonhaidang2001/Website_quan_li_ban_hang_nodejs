const axios  = require('axios');
const ApiError = require('../api-error');



exports.custom = async (req, res) =>{
    try {
        const respon = await axios.get('http://localhost:5000/customs/api/customs')
        res.render('custom/custom',{customs:respon.data});
       
        
    } catch (error) {
        return next(
            new ApiError(500, "you can find custom")
         )
    }
}
exports.addCustom = async (req, res) =>{
    res.render('custom/addCustom');
}
exports.addCustomer = async (req, res) =>{
    try {
        const respon = await axios.post('http://localhost:5000/customs/api/customs',{
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
            address:req.body.address,
            phone:req.body.phone,
        })
        res.redirect('/customs');       
    } catch (error) {
        return next(
            new ApiError(500, "you can create a custom")
         )
    }
}
exports.delCustom = async (req, res) =>{
    try {
        const id = req.params.id;
        await axios.delete('http://localhost:5000/customs/api/customs',{params:{id}})  
        res.redirect('back');
    } catch (error) {
        return next(
            new ApiError(500, "you can create a custom")
         )
    }
}

