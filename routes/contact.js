const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact_controller')
const Contact = require('../models/contact')
const Users = require('../models/users');

router.get('/contacts',contactController.contacts);
router.post('/create-contact', (req, res) => {
    // const userEmail = Users.findById(req.body.email);
    //console.log(userEmail.email);
    const userPassword = Users.findById(req.body.password);
    Contact.create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password
    }, function(err,newContact){
        if(err){
            console.log("Error in creating new contact");
            return ;
        }else {
            console.log('*********', newContact);
            return res.redirect('/users/profile');
        }
    });
});

router.get('/delete-contact', (req,res) =>{
    // console.log(req.params);
    let id= req.query.id;

    Contact.findByIdAndDelete(id,function(err){
        if(err){
            console.log("Error in deleting object");
            return;
        }else{
            return res.redirect('back');
        }

    });

});

module.exports = router;