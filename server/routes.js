const express = require('express');

exports = module.exports = function (app) {

   // app.get('/hello', (req, res) => res.send('Hello World!'))
    app.get('/hello', (req, res) => res.json({ "key1": "value6" }))
}