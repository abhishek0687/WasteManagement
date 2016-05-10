var connection = require('./connection.js').con;


module.exports = {

	insertSales:function(InData,callback){
		connection.query('insert into sales set ?',InData,function(err,OutData){ //dta = { itemtype: 'home', ItemName: 'Paper', rateperunit: 20 };
			return callback(err,OutData);
		});
	},

//	updateUser:function(InData,callback){
//		var queryString="";
//		if(InData.address!=""){
//		 	queryString = 'update user set address ='+InData.address+' where user_id ='+InData.user_id;
//		}
//		else if(InData.phone!=""){
//		 	queryString = 'update user set phone ='+InData.phone+' where user_id ='+InData.user_id;
//		}
//		connection.query(queryString,function(err,OutData){
//			return callback(err,OutData);
//		});
//	},

	getSales:function(InData,callback){
		var queryString="";
		if(InData.user_id!=""){
			queryString = 'select * from sales where user_id ='+InData.user_id;
		}
		else if(InData.Agent_id!=""){
			queryString = 'select * from sales where Agent_id ='+InData.Agent_id;
		}
		connection.query(queryString,function(err,OutData){
			return callback(err,OutData);
		});
	}
	//getUser:function(InData,callback){
	//	var queryString="select * from user where user_id= "+InData.user_id;
	//	connection.query(queryString,function(err,OutData){
	//		return callback(err,OutData);
	//	});
	//},
	//getAllUser:function(callback){
	//	var queryString="select * from user';
	//	connection.query(queryString,function(err,OutData){
	//		return callback(err,OutData);
	//	});
	//},
	//deleteUser:function(InData,callback){
	//	var queryString="delete from user where user_id= "+InData.user_id;
	//	connection.query(queryString,function(err,OutData){
	//		return callback(err,OutData);
	//	});
	//}
}
