let express = require('express');
let router  = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// define the User Model instance
let userModel = require('../models/user');
let User = userModel.User; //allias

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home'});
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', {title: 'About'});
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('index', {title: 'Projects'});
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('index', {title: 'Services'});
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('index', {title: 'Contact'});
}

module.exports.displayLoginPage = (req, res, next) => {
    //check if the user if already logged in
    if(!req.user)
    {
        res.render('../views/auth/login',
        {
            title: "Login",
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ''
        })
    }
    else
    {
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req, res, next) =>{
    passport.authenticate('local',
    (err, user, info) =>{
        //server error?
        if(err)
        {
            return next(err);
        }
        //is there a user login error?
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) =>{
            //server error?
            if(err)
            {
                return next(err);
            }
            return res.redirect('/contact-list');
        });
    })(req, res, next);
}

module.exports.performLogout = (req, res, next) =>{
    req.logout();
    res.redirect('/');
}

/* for register page */
module.exports.displayRegisterPage = (req, res, next) => {
    //check if the user is not already logged in
    if(!req.user)
    {
        res.render('../views/auth/register',
        {
            title: 'Register',
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName: ''
        });
    }
    else
    {
        return res.redirect('/')
    }
}

module.exports.processRegisterPage = (req, res, next) => {
    //instatiate a user object
    let newUser = new User({
        username : req.body.username,
        //password: requ.body.password
        email: req.body.email,
        displayName: req.body.displayName
    });

    User.register(newUser, req.password, (err) =>{
        if(err)
        {
            console.log("Error: Inserting New User");
            if(err.name == "UserExistsError")
            {
                req.flash(
                    'registerMessage',
                    'Registration Error: User Already Exists!'
                );
                console.log('Error: User Already Exists!')
            }
            return res.render('../views/auth/register',
            {
                title: 'Register',
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName : ''
            });
        }
        else
        {
            //if no error exists, then registration is successful
            //redirect the user and authenticate them
            return passport.authenticate('local')(req, res, () => {
                res.redirect('/contact-list')
            });
        }
    });
}



