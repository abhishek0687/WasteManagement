var register = require('../app/register');
var login = require('../app/login');
var order = require('../app/getOrder');

var session = require('express-session');
var bodyParser = require('body-parser');


module.exports = function(app){
	var sess;
	app.use(session({secret: 'ssshhhhh'}));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));

	app.get('/',function(req,res){
    sess=req.session;
		console.log("in / abc ");
		//if user already logged in to browser
		//redirect to his dashboard
		if(sess.email) {
			console.log("in / session is set" );
    	res.redirect('/dashboard');
		}
		else{
			console.log("in / session is NOT  set" );
			//res.sendFile('login.html',{"root":__dirname+'/../views/'});	
			res.render('login');	
		}
	});


	app.get('/signup',function(req,res){
    sess=req.session;
		//if user already logged in to browser
		//redirect to his dashboard
		if(sess.email) {
			console.log("in / session is set" );
    	res.redirect('/dashboard');
		}
		else{
			console.log("in / session is NOT  set" );
			res.render('signup');	
			//res.sendFile('signUp.html',{"root":__dirname+'/../views/'});	
		}
	});



	app.post('/register',function(req,res){
    sess=req.session;
		//if user already logged in to browser
		//redirect to his dashboard
		if(sess.email) {
    	//res.redirect('/dashboard');
		}
		else{
			var email = {"email":req.body.email};
			var  phone = {"phone":req.body.phone};
			register.validateEmail(email,function(d){
				if(d==0){//email not registered
					console.log("email not available");
					register.validatePhone(phone,function(d){
						if(d==0){ // phone no not available
							console.log("phone not available");
							console.log(req.body);
							register.newUserRegistration(req.body,function(d){
								if(d==0){// user registered successfully
									console.log("user successfully registeredddd");
									sess.email=req.body.email;
									res.json({data:5});
    							//res.redirect('/dashboard');
									//res.json({data:5});
								}
								else{ //1-> error in creating user
									res.json({data:6});
								}
							})
						}
						else if(d==1){ // phone already registered
							console.log("phone available");
							res.json({data:3});
						}
						else{ //-1 -> error in getting phone no from db
							res.json({data:4});
						}
					});
				}
				else if(d==1){// email already registered
					console.log("email available");
					res.json({data:d});
				}
				else{//-1 -> error in getting email from db
					res.json({data:2});
				}
			});	
			console.log(req.body);	
		}
	});


	app.post('/login',function(req,res){
    sess=req.session;
		//console.log(req);
		//sess.email=req.body.email;
		login.validateLogin(req.body,function(data){
			if(data==0){
				sess.email=req.body.email;
				res.json({data:data});
    		//res.redirect('/dashboard');
			}
			else if(data==1){
				res.json({data:data});
			}
			else if(data==2){
				res.send({data:data});
			}
			else if(data==-1){
				res.send({data:data});
			}
			else{
				console.log("Errro in Routes/Index at /login");
			}
		});
	});

	app.get('/dashboard',function(req,res){
    sess=req.session;
		console.log("dashboard");
		//if user already logged in to browser
		//redirect to his dashboard
		if(sess.email) {
			var email = {email:sess.email};
			order.getOrder(email,function(d){
				console.log(d);
				//res.sendFile('dashboard.html',{"root":__dirname+'/../views/'});	
				res.render('dashboard',{data:d});	
			});
		}
		else{
			res.render('dashboard');	
		//	res.sendFile('dashboard.html',{"root":__dirname+'/../views/'});	
		}
	});

	app.get('/logout',function(req,res){
		req.session.destroy(function(err) {
		  if(err) {
		    console.log(err);
		  } else {
		    res.redirect('/');
		  }
		})
	});

}
