var express = require('express'),
    compression = require('compression');

var app = express();

var oneDay = 86400000;

app.use(compression({threshold: 512}));

app.use(express.static(__dirname + '/public', { maxAge: oneDay }));

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});