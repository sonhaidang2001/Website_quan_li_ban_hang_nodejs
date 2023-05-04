const axios  = require('axios');
const ApiError = require('../api-error');

exports.update = async (req, res,next) =>{
    await axios.put(`http://localhost:5000/api/user/${req.params.id}`,req.body,{new:true})
    .then(respon =>{
        res.redirect('/home')
    })
    .catch(err =>{
        return next(
            new ApiError(500, "you can update user")
        )
    })
}


exports.login = (req, res) =>{
    res.render('login');
}
exports.loginCheck = async (req, res,next) =>{   
    await axios.post('http://localhost:5000/api/user',{
            username: req.body.username,
            password: req.body.password
    })
    .then(respon =>{
        res.redirect('home');        
    })
    .catch(err =>{
        return next(
            new ApiError(500, "you can login user",err)
        )
    })
}

exports.home = async (req, res) =>{
    await axios.get('http://localhost:5000/customs/api/custom')
    .then(respon =>{
        res.render('home',{customs:respon.data})
    })
    .catch(err =>{
        return next(
            new ApiError(500, "you can find custom")
        )
    })
}
exports.edit = async (req, res,next) =>{
    await axios.get('http://localhost:5000/api/user/')
    .then(respon =>{
        res.render('edit',{user:respon.data})
    })
    .catch(err =>{
        return next(
            new ApiError(500, "you can't edit user")
        )
    })
}