var connection = require('./connection.js').con;


module.exports = {
	
	getOrderDetail:function(InData,callback){//Indata={email:"abcsd@gmail.com"}
     var queryString ='select oh.order_id,oh.DateOfCreation,oh.ScheduleDateOfpickup,oh.order_status,it.ItemName,od.quantity from OrderHeader oh inner join OrderDetail od on oh.order_id=od.order_id inner join user u on oh.user_id=u.user_id inner join item it on it.item_id =od.item_id  where u.email="'+InData.email+'"';
		connection.query(queryString,function(err,OutData){
			callback(err,OutData);
		})
	},

	createOrder:function(InData,callback){

	}


}
