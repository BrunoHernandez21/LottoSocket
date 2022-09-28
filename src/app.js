const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
// Instance
var app = express();
// Cors
app.use(function(req, res, next) {
    res.header("x-token", "*");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, Authorization, API-KEY, X-TOKEN, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    next();
});
// Acept Format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Location services
const vApp = require('./helpers/globals'); 
var emit = require ('./ruts/emit/emit_ruts');
const publicPath = path.resolve(__dirname,'./../public');
// Rest Points  
app.use("/api/" + vApp.version + "/env",express.static(publicPath));
// Emiting service
app.use("/api/" + vApp.version + "/emit", emit);
// Exports
module.exports = app;
