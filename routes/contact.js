const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact_controller')
const Contact = require('../models/contact')

router.get('/contacts',contactController.contacts);
router.post('/create-contact', (req, res) => {
    Contact.create({
        name: req.body.name,
        phone: req.body.phone,
        unq: req.body.unq
    }, function(err,newContact){
        if(err){
            console.log("Error in creating new contact");
            return ;
        }else {
            console.log('*********', newContact);
            return res.redirect('/');
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