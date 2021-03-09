const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/prove09', { 
        title: 'Prove 09', 
        path: '/prove09', // For pug, EJS 
    });
});


module.exports = router;