const express = require('express');
const router = express.Router();

// Path to your JSON file, although it can be hardcoded in this file.
const dummyData = require('./../data/dataHeroes.json')

router.get('/', (req, res, next) => {
    res.render('pages/prove11', {
        title: 'Prove 11',
        path: '/prove11',
    });
});

router.get('/fetchAll', (req, res, next) => {
    res.json(dummyData);
});

router.post('/insert', (req, res, next) => {
/************************************************
 * INSERT YOUR WEB ENDPOINT CODE HERE
 ************************************************/
    if (!dummyData.avengers.find(hero => hero.name.toUpperCase() == req.body.heroName.toUpperCase())){
        dummyData.avengers.push({ name: req.body.heroName });
        res.json({ message: 'new name added'});
    }
    else {
        res.json({ message: 'Duplicate Name'});
    }
});

module.exports = router;