
const express = require('express');
const cors = require('cors');
const users = require('./users-router');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', users);

app.get('/tasks', async(req, res) => {
    res.send('TASKS')
});

app.get('/', async(req, res) => {
    res.send('HOME')
});

app.use(function(req, res){
    res.sendStatus(404);
});


app.listen(3001, () => {
    console.log('Example app listening on port 3001!');
});