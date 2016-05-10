var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "welcome",
  database: "sample"
});
console.log("In DB connewction");
con.connect();
module.exports.con = con;


//module.exports ={ 
//	connect:function(callback){
//		con.connect(function(err){
//			if(err){
//				console.log('Error connecting to Db');
//				return;
//			}
//			console.log('Connection established');
//		})
//	},				
//	end:function(callback){
//		con.end(function(err) {
//				  // The connection is terminated gracefully
//  				  // Ensures all previously enqueued queries are still
//				  // before sending a COM_QUIT packet to the MySQL server.
//			callback(err);
//		})
//	}
//}
