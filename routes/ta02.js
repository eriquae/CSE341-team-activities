//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself! 
const express = require('express');
const router = express.Router();
const users = ["Fraser", "Eriqua", "Veroniqua"];

router.get('/',(req, res, next) => {
    res.render('pages/ta02', { 
        users: users,
        title: 'Team Activity 02', 
        path: '/ta02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

router.post('/addUser',(req, res, next) => {
    users.push(req.body.user);
    res.redirect('/ta02/');
});

router.post('/removeUser',(req, res, next) => {
    const index = users.indexOf(req.body.user);
    if (index > -1) {
        users.splice(index, 1);
    }
    res.redirect('/ta02/');
});



module.exports = router;