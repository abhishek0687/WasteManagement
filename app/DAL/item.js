var connection = require('./connection.js').con;


module.exports = {
	getItems:function(InData,callback){
		var queryString = 'select itemName from item where itemType ='+InData.ItemType;
		connection.query(queryString,function(err,OutData){
			return callback(err,OutData);
		});
	},
	getAllItems:function(callback){
		var queryString = 'select * from item';
		connection.query(queryString,function(err,OutData){
			return callback(err,OutData);
		});
	},

	insertItem:function(InData,callback){
		connection.query('insert into item set ?',InData,function(err,OutData){ //dta = { itemtype: 'home', ItemName: 'Paper', rateperunit: 20 };
			return callback(err,OutData);
		});
	},

	updateItem:function(InData,callback){
		var queryString = 'update item set ratePerUnit ='+InData.ratePerUnit+' where item_id ='+InData.item_id;
		connection.query(queryString,function(err,OutData){
			return callback(err,OutData);
		});
	},

	getItemId:function(InData,callback){
		var queryString = 'select item_id from item where itemType ='+InData.ItemType+' and ItemName = '+ InData.ItemName;
		connection.query(queryString,function(err,OutData){
			return callback(err,OutData);
		});
	},
	deleteItem:function(InData,callback){
		var queryString="delete from item where item_id= "+InData.item_id;
		connection.query(queryString,function(err,OutData){
			return callback(err,OutData);
		});
	}
}




