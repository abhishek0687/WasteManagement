var express = require('express');
var http = require('http');
var route = require('./routes/index');
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});

var app = express();
app.set('port',process.env.PORT || 5111);
app.use(express.static(__dirname + '/public'));
//app.use(express.static(__dirname + '/views'));
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');


var server = http.Server(app).listen(app.get('port'),function(){
console.log('started on '+ app.get('port'));
}); 

//socket(server,app);
route(app);

//console.log(db.con);

//db.connect();
//db.select('user',function(data){
//	console.log(data);
//});



