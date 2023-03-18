const express = require('express');
const router = express.Router();

router.get('/fruits', (req, res) => {
    res.render('fruits/index.ejs', {fruits: fruits})
})

router.get('/fruits/new', (req, res) => {
    res.render("fruits/new.ejs")
})

router.get('/fruits/:id', (req, res) => {
    console.log(req.params);
    // console.log(fruits);
    const fruit = fruits[req.params.id];
    console.log(fruit);
    res.render("fruits/show.ejs", {fruit: fruit});
})

module.exports = router;