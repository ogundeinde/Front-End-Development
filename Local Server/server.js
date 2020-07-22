const express = require('express');
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

/* Initializing the main project folder */
app.use(express.static('website'));

const port = 3000;

const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)});

app.get('/all', (req, res) => {
    res.send('Hello World');
    console.log("running GET request");
});

const animal = {
    name: "Lion",
    description: "Wild"
};

let data = {};

app.get('/fakeAnimalData', (req, res)=>{
    res.send(animal);
    console.log("running GET request for 123");
});


app.get('/fakeAnimal', (req, res)=>{
    res.send(data);
    console.log("running GET request for xyz");
});


app.post('/add', (req, res) => {
    console.log("running POST request");
    //data.push(req.body);

    newEntry = {
        animal: req.body.animal,
        desc: req.body.desc,
        fav: req.body.fav
    }

    data = newEntry;
    console.log(data);
})







