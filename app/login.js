var user = require('./DAL/user')
var Agent = require('./DAL/agent')
var sales = require('./DAL/sales')
var item = require('./DAL/item')
var user_type = require('./DAL/user_type')


module.exports = {
	
	validateLogin:function(credentials,callback){ //credentials={email:"email",password:"password"}
		user.validatePassword(credentials.email,function(e,d){
			// 0 -> password matched and user will be redirected to his dahboard
			// 1 -> wrong password
			// 2 -> email is not registered
			// -1 -> error in fetcing data from database 
			if(!e){
				console.log(d);
				if(d!=""){
					if(d[0].password==credentials.password){
						callback(0);
					}
					else{
						callback(1);
					}
				}
				else{
					callback(2);
				}
			}
			else{
				callback(-1);
			}
		});
	},

	getDashboardData:function(){}

}
