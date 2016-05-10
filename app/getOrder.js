var order = require('./DAL/order');

module.exports={
	getOrder:function(email,callback){
		order.getOrderDetail(email,function(e,d){
			//-1 -> error in getting data
			if(!e){
				callback(d);	
			}
			else{
				callback(-1);	
			}	
		})
	}


}
