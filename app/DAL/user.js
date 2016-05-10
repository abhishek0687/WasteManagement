var connection = require('./connection.js').con;


module.exports = {

	insertUser:function(InData,callback){
		connection.query('insert into user set ?',InData,function(err,OutData){ //dta = { itemtype: 'home', ItemName: 'Paper', rateperunit: 20 };
			return callback(err,OutData);
		});
	},

	updateUser:function(InData,callback){
		var queryString="";
		if(InData.address!=""){
		 	queryString = 'update user set address ='+InData.address+' where user_id ='+InData.user_id;
		}
		else if(InData.phone!=""){
		 	queryString = 'update user set phone ='+InData.phone+' where user_id ='+InData.user_id;
		}
		connection.query(queryString,function(err,OutData){
			return callback(err,OutData);
		});
	},
	
	verifyEmail:function(InData,callback){
		var queryString = 'select user_id from user where email =\''+InData.email+'\' ';
		connection.query(queryString,function(err,OutData){
			return callback(err,OutData);
		});

	},

	verifyPhone:function(InData,callback){
		console.log("InData");
		console.log(InData);
		var	queryString = 'select user_id from user where phone =\''+InData.phone+'\' ';
		console.log(queryString);
		connection.query(queryString,function(err,OutData){
			return callback(err,OutData);
		});

	},

	getUserId:function(InData,callback){
		var queryString="";
		if(InData.email!=""){
			queryString = 'select user_id from user where email =\''+InData.email+'\' ';
		}
		else if(InData.phone!=""){
			queryString = 'select user_id from user where phone =\''+InData.phone+'\' ';
		}
		connection.query(queryString,function(err,OutData){
			return callback(err,OutData);
		});
	},
	getUser:function(InData,callback){
		var queryString="select * from user where user_id= "+InData.user_id;
		connection.query(queryString,function(err,OutData){
			return callback(err,OutData);
		});
	},
	getAllUser:function(callback){
		var queryString="select * from user";
		connection.query(queryString,function(err,OutData){
			return callback(err,OutData);
		});
	},
	deleteUser:function(InData,callback){
		var queryString="delete from user where user_id= "+InData.user_id;
		connection.query(queryString,function(err,OutData){
			return callback(err,OutData);
		});
	},

	validatePassword:function(InData,callback){  //credentials={email:"email",password:"password"}
		var queryString="select password from user where email = \'"+InData+"\'";
		connection.query(queryString,function(err,OutData){
			return callback(err,OutData);
		});
	}

}
