var user = require('./DAL/user')
var Agent = require('./DAL/agent')
var sales = require('./DAL/sales')
var item = require('./DAL/item')
var user_type = require('./DAL/user_type')
//vlidating email or phone if its already got registered
function validate(email,callback){
	user.getUserId(email,function(err,data){
		if(!err){
	 	  if(data==null){
		  	callback(0);	
		  }
		  else{
		  	callback(1);
		  }
		}
		else{
			callback(-1);
		}
	});

}

module.exports = {
	
	validateEmail:function(email,callback){
		user.verifyEmail(email,function(e,d){
			// 0 -> email not available and user can be created
			// 1 -> email already registered
			// -1 -> error in getting data from DB
			if(!e){
				if(d==""){
					callback(0);
				}
				else{
					callback(1);
				}
			}
			else{
				callback(-1);
			}
		});
	},

	validatePhone:function(phone,callback){
		user.verifyPhone(phone,function(e,d){
			// 0 -> phone no not available and user can be created
			// 1 -> phone already registered
			// -1 -> error in getting data from DB
			if(!e){
				if(d==""){
					callback(0);
				}
				else{
					callback(1);
				}
			}
			else{
				callback(-1);
			}
		});
	},

	newUserRegistration:function(ClientData,callback){
		user.insertUser(ClientData,function(e,d){
			//0-> successful user creation
			//1-> error in creating user
			if(!e){
				callback(0);	
			}
			else{	
				callback(1);
			}
		})
	}
}









