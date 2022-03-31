var http = require('http');
var url = require('url');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8080);

app.get('/test1', function(req, res) {
    res.write('TEST1\n');
    res.end();
});

app.post('/', function(req, res) {
    for (key in req.body) {
        console.log(key, '=', req.body[key]);
        console.log()
    }
    res.end();
});