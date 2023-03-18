const express = require('express');
const app = express();
const models = require('./models/Fruits')
const fruits = models.fruits
// Models - Database stuff
// controllers - routes
// views - EJS files (EJS is literally just HTML and JS)

// Middleware 
// This is a view engine that is looking for EJS files to be rendered. It also sets up that ALL the EJS files for my frontend will be located in a file named views
app.set('view engine', 'ejs');


// Routes
// Hungry for more to create my own API, and APIs always should be in JSON
app.get('/api', (req, res) => {
    res.json({
        fruits,
        status: 200
    })
})

app.get('/', (req, res) => {
    res.render('home.ejs');
})

// This is just my index route. I want this to be where I have a list of all my data. For example, all my products or fruits or star wars ships
app.get('/starwars', (req, res) => {
    res.render('starwars/index.ejs')
})

app.get('/fruits', (req, res) => {
    res.render('fruits/index', {fruits: fruits})
})

app.get('/fruits/new', (req, res) => {
    res.send("This is a form for you to fill out")
})

app.get('/fruits/:id', (req, res) => {
    console.log(req.params);
    // console.log(fruits);
    const fruit = fruits[req.params.id];
    console.log(fruit);
    res.render("fruits/show.ejs", {fruit: fruit});
})


app.get('/*', (req, res) => {
    res.send("You're not smart and visited a bad link")
})

// Listen at the bottom
app.listen(4000, () => {
    console.log("Listening on port 4000")
})
