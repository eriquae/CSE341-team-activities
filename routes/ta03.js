//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();
const fs = require('fs');

let rawdata = fs.readFileSync('items.json');
let products = JSON.parse(rawdata);
console.log(products)

router.get('/',(req, res, next) => {
    if (req.query.search === undefined) {
        req.query.search = ""
    }
    
    res.render('pages/ta03', { 
        title: 'Team Activity 03', 
        path: '/ta03', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        products: products,
        search: req.query.search
    });
});


module.exports = router;