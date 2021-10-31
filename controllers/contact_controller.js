const Contact = require('../models/contact')
const User = require('../models/users')
module.exports.create = function(req,res){
    User.findById(req.body.post, function(err,post){
        if(user){
            Contact.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            },function (err,comment){
                //handle error
                post.comments.push(comment);
                post.save();

                res.redirect('/');
            });
        }
    });
}
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

