const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('pages/prove01-form.ejs');
});

router.post('/display', (req, res, next) => {
    var in1 = (req.body.input1);
    var in2 = (req.body.input2);
    res.render('pages/prove01-display.ejs', {in1: in1, in2: in2});
});

module.exports = router;