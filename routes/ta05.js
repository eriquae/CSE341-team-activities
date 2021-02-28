const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    if(typeof req.session.style === 'undefined') {
        req.session.style = '#000000';
    }
    if(typeof req.session.counter === 'undefined') {
        req.session.counter = 0;
    }
    res.render('pages/ta05', { 
        title: 'Team Activity 05', 
        path: '/ta05', // For pug, EJS 
        style: req.session.style,
        counter: req.session.counter
    });
});

router.post('/counter',(req, res, next) => {
    if(typeof req.body.increment !== 'undefined') {
        req.session.counter++;
    }
    if(typeof req.body.decrement !== 'undefined') {
        req.session.counter--;
    }

    res.redirect('/ta05')
})

router.post('/change-style',(req, res, next) => {
    req.session.style = req.body.style;
    res.redirect('/ta05')
})

router.get('/reset',(req, res, next) => {
    req.session.destroy();
    res.redirect('/ta05')
})

module.exports = router;