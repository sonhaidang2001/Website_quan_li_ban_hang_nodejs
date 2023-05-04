const axios  = require('axios');
const path  = require('path');
const ApiError = require('../api-error');


exports.work = async (req, res,next) =>{
    await axios.get('http://localhost:5000/works/api/work')
    .then(respon =>{
        res.render('work/work',{work:respon.data})
    })
    .catch(err =>{
        return next(
            new ApiError(500, "you can find work")
        )
    })
}
exports.addWorkNew = async (req, res,next) =>{
    await axios.post('http://localhost:5000/works/api/work',{
        name:req.body.name,
        description:req.body.description       
    })
    .then(respon =>{
        res.redirect('/works');       
    })
    .catch(err =>{
        return next(
            new ApiError(500, "you can add work")
        )
    })
}
exports.delWork = async (req, res,next) =>{
    const idWork = req.params.id;
    await axios.delete('http://localhost:5000/works/api/work/'+idWork)
    .then(respon =>{
        res.redirect('/works')
    })
    .catch(err =>{
        return next(
            new ApiError(500, "you can't delete work")
        )
    })
}
exports.editWork = async (req, res,next) =>{
    await axios.get(`http://localhost:5000/works/api/work/${req.params.id}`)
    .then(respon =>{
        res.render('work/edit',{workUpdate:respon.data})
    })
    .catch(err =>{
        return next(
            new ApiError(500, "you can find work for id")
        )
    })
}
exports.updateWork = async (req, res,next) =>{
    await axios.put(`http://localhost:5000/works/api/work/${req.params.id}`,req.body,{new:true})
        .then(respon =>{
            res.redirect('/works')
        })
        .catch(err =>{
            return next(
                new ApiError(500, "you can't update work")
            )
        })
}