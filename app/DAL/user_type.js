var connection = require('./connection.js').con;


module.exports = {
	getUserType:function(InData,callback){
		var queryString = 'select type from user_type where userType_id ='+InData.userType_id;
		connection.query(queryString,function(err,OutData){
			return callback(err,OutData);
		});
	},

	getAllUserType:function(callback){
		var queryString = 'select * from user_type';
		connection.query(queryString,function(err,OutData){
			return callback(err,OutData);
		});
	},

	insertUserType:function(InData,callback){
		connection.query('insert into user_type set ?',InData,function(err,OutData){ //dta = { itemtype: 'home', ItemName: 'Paper', rateperunit: 20 };
			return callback(err,OutData);
		});
	},

	updateUserType:function(InData,callback){
		var queryString = 'update user_type set type ='+InData.type+' where userType_id ='+InData.userType_id;
		connection.query(queryString,function(err,OutData){
			return callback(err,OutData);
		});
	},

	getUserTypeId:function(InData,callback){
		var queryString = 'select userType_id from user_type where Type =\''+InData.Type+'\' ';
		connection.query(queryString,function(err,OutData){
			return callback(err,OutData);
		});
	},
	deleteUserType:function(InData,callback){
		var queryString="delete from user_type where userType_id= "+InData.userType_id;
		connection.query(queryString,function(err,OutData){
			return callback(err,OutData);
		});
	}
}
