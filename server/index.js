const express = require('express');
const config = require('./config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Connect to MongoDB
console.log('Connection to mongoDb on uri: ' + config.mongo.uri);
mongoose.connect(config.mongo.uri, config.mongo.options);


mongoose.connection.on('error', function (err) {
    console.error('MongoDB connection error: ' + err);
});

const db = mongoose.connection;


const HelloSchema = new mongoose.Schema({
    key1: String
});

const HelloModel = mongoose.model('Hello', HelloSchema);

const hello_instance = new HelloModel({ key1: 'hello6' });

hello_instance.save((err) => {
    if (err) return handleError(err);
    // saved!
});



// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Cross Origin middleware
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, 'application/json', Accept")
    next()
})

require('./routes')(app);

app.listen(config.port, () => console.log(`Example app listening on ${config.port}!`))