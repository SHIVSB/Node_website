
const Contacts = require('../models/contact');

module.exports.contacts = function (req,res){

    Contacts.find({},function(err,contacts){
        if(err){
            console.log('error in fetching contacts');
            return;
        }

        return res.render('contact',
            {
                title: 'My Contacts List',
                contact_list: contacts
            });
    });

}

