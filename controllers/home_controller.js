const Contact = require('../models/contact');

module.exports.home = function (req,res) {

    Contact.find({},function(err,contact){
        if(err){
            console.log('error in fetching contacts');
            return;
        }

        return res.render('home',
            {
                title: 'My Contacts List',
                contact_list: contact
            });
    });

}
