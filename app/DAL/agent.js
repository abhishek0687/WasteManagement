var connection = require('./connection.js').con;


module.exports = {
	getAgent:function(InData,callback){
		var queryString = 'select FName,LName from Agent where agent_id ='+InData.agent_id;
		connection.query(queryString,function(err,OutData){
			return callback(err,OutData);
		});
	},

	getAllAgent:function(callback){
		var queryString = 'select * from Agent';
		connection.query(queryString,function(err,OutData){
			return callback(err,OutData);
		});
	},

	insertAgent:function(InData,callback){
		connection.query('insert into Agent set ?',InData,function(err,OutData){ //dta={ itemtype: 'home', ItemName: 'Paper', rateperunit: 20 };
			return callback(err,OutData);
		});
	},
//More detils need to added to update function as per requirement
//Only phone no implementaion is done
	updateAgent:function(InData,callback){
		var queryString="";
		if(InData.phone!=""){
		 	queryString = 'update Agent set phone ='+InData.phone+' where agent_id ='+InData.agent_id;
		}
		connection.query(queryString,function(err,OutData){
			return callback(err,OutData);
		});
	},

	getAgentId:function(InData,callback){
		var queryString = 'select agent_id from agent where email =\''+InData.email+'\' or phone =\' '+ InData.phone+'\' ';
		connection.query(queryString,function(err,OutData){
			return callback(err,OutData);
		});
	},
	deleteAgent:function(InData,callback){
		var queryString="delete from Agent where agent_id= "+InData.agent_id;
		connection.query(queryString,function(err,OutData){
			return callback(err,OutData);
		});
	}
}
