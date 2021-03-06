const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;
const Users = require("../models/users");
//authentication using passport

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    function (email, password, done) {
      //Find a user and establish the identity
      Users.findOne({ email: email }, function (err, user) {
        if (err) {
          console.log("Error in finding user.");
          return done(err); //report an error to passport
        }

        if (!user || user.password != password) {
          console.log("Invalid Username/Password");
          return done(null, false);
        }

        return done(null, user);
      });
    }
  )
);

//serializing to decide which key is to be kept in the cookies
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

//deserializing the cookies

passport.deserializeUser(function (id, done) {
  Users.findById(id, function (err, user) {
    if (err) {
      console.log("Error in finding user");
      return done(err);
    }

    return done(null, user);
  });
});

//check if the user is authenticated
passport.checkAuthentication = function (req, res, next) {
  //if the user is signed in pass on the request to the next function
  if (req.isAuthenticated()) {
    return next();
  }

  //if the user is not signed in
  return res.redirect("/users/sign-in");
};

passport.setAuthenticatedUser = function (req, res, next) {
  if (req.isAuthenticated()) {
    //req.user contains the current signed in user from the cookie and we are just sending this to the locals for the views
    res.locals.user = req.user;
  }
  next();
};

module.exports = passport;
