var express = require('express');
var app = express();

app.get('/', function(req, res) {
    var softwareRegex = /\(([^\)]+)\)/;
    var software = req.headers['user-agent'].match(softwareRegex)
    
    console.log(software);
    
    var resObj = {
        'ipaddress': req.headers['x-forwarded-for'],
        'language': req.headers['accept-language'].substring(0, 5),
        'software': software[0].substring(1, software[0].length - 1)
    }
    
    res.end(JSON.stringify(resObj));
});

app.listen(process.env.PORT || 5000);