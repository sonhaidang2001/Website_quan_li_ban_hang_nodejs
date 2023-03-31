const axios  = require('axios');
const ApiError = require('../api-error');

exports.editUpdate = async (req, res,next) =>{
    try {
        const respon = await axios.put('http://localhost:5000/api/users', { params : { id : req.params.id }})
        res.json(req.body)
    } catch (error) {
        return next(
            new ApiError(500, "you can find contact")
         )
    }
}

exports.edit = async (req, res,next) =>{
    try {
        const respon = await axios.get('http://localhost:5000/api/users', { params : { id : req.query._id }})
        res.render('edit',{user:respon.data});
        
    } catch (error) {
        return next(
            new ApiError(500, "you can find contact")
         )
    }
}
exports.loginCheck = async (req, res,next) =>{
    try {
        await axios.post('http://localhost:5000/api/users',{
            username: req.body.username,
            password: req.body.password
        })
        res.redirect('home');        
    } catch (error) {
        return next(
            new ApiError(500, "you can login user")
         )
    }
}
exports.login = (req, res) =>{
    res.render('login');
}
exports.home = (req, res) =>{
    res.render('home');
}