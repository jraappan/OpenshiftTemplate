var express = require('express');

var app = express();

// Need to define two variables with two environment 
//variables to get app to work in openshift

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

// when server is connected return the index.html as response
app.get('/',function(req,res){
    res.sendfile('index.html');
});

//listen to given port in given ip addrss
app.listen(port,ip);