var express = require('express');
var router = express.Router();
var user=require('../model/user')


router.get('/',(req, res, next) => {


    res.render('authentification.twig')
})
router.get('/rechercher',(req, res, next) => {
    user.find({email:req.body.email,password:req.body.password},(error, result) => {
        if (result){

            user.find((error1, data) => {
                res.render('gestionUtilisateur.twig',{data})
            })

        }

    })
})
router.post('/add',(req, res, next) => {
    var newuser=new user({
        username : req.body.username,
        pasword : "examen123",
        email:req.body.email
    })
    newuser.save()
    res.redirect('/auth/rechercher')
})

router.get('/rechercherUtilistateur',(req, res, next) => {
    res.render('chercherUtilisateur.twig')
})
router.post('/rechercherbyEmail',(req, res, next) => {
    user.find({email:req.body.email},(error, result) => {
        if (error)throw error
        console.log(req.body.email)
        console.log(result)
        res.render('detailUtilisateur.twig',{result})
    })



})
router.get('/delete/:id',(req, res, next) => {
        user.findOneAndRemove({_id:req.params.id},(err)=>{
            if (err)throw err
        })
    res.redirect('/auth/rechercher')
})

module.exports = router;
