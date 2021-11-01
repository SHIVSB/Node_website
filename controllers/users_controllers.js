const Users = require('../models/users');
const Contact = require('../models/contact');

module.exports.profile = function (req,res){
    Contact.find({},function(err,contact){
        if(err){
            console.log('error in fetching contacts');
            return;
        }

        return res.render('user_profile',
            {
                title: 'My User Profile',
                contact_list: contact
            });
    });
}

module.exports.signUp = function (req,res){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }

    return res.render('user_sign_up',{
        title: "ContactsList | Sign Up ......."
    });

}

module.exports.signIn = function (req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    const userEmail = Users.findById(req.body.email);

    return res.render('user_sign_in',{
        title: "Contacts List",
        uemail: userEmail
    })
}

module.exports.create = function(req,res){
    if(req.body.password != req.body.confirmPassword){
        return res.redirect('back');
    }
    Users.findOne({email: req.body.email}, function(err, user){
        if(err){
            console.log("Error in finding user in signing up");
            return
        }
        if(!user) {
            Users.create(req.body, function (err, user) {
                if (err) {
                    console.log("Error in finding user in signing up 2");
                    return
                }
                return res.redirect('/users/sign-in')
            })
        }else{
            return res.redirect('back');
        }
    })

}
//sign in and create a session for the user
module.exports.createSession = function (req,res){
    return res.redirect('/users/profile');
}

module.exports.destroySession = function(req,res){
    req.logout();
    return res.redirect('/');
}