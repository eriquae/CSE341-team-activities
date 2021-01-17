const express = require('express');
const fs = require('fs');
const router = express.Router();
const books = [];

router.get('/', (req, res, next) => {
    res.render('pages/prove02-form.ejs', {
        path: '/prove02'
    });  
});

router.post('/display', (req, res, next) => {
    books.push({
        title: req.body.title,
        summary: req.body.summary
    });
    res.render('pages/prove02-display.ejs', {
        books: books,
        path: '/prove02'

    });
    
});

module.exports = router;