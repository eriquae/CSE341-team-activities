const { match } = require('assert');
const express = require('express');
const router = express.Router();
const fs = require('fs');

let rawdata = fs.readFileSync('items.json');
let products = JSON.parse(rawdata);

const ITEMS_PER_PAGE = 10;

router.get('/',(req, res, next) => {
    const page = +req.query.page || 1;
    const count = products.length;
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    if (req.query.search === undefined) {
        req.query.search = ""
    }
    
    res.render('pages/prove08', { 
        title: 'Prove 08', 
        path: '/prove08', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        products: (products.slice(startIndex, startIndex + ITEMS_PER_PAGE)),
        search: req.query.search,
        //count: count,
        currentPage: page,
        hasNextPage: ITEMS_PER_PAGE * page < count,
        hasPreviousPage: page > 1,
        nextPage: page + 1,
        previousPage: page - 1,
        lastPage: Math.ceil(count / ITEMS_PER_PAGE)
    });
});


module.exports = router;