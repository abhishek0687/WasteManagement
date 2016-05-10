		$(document).ready(function(){
			var baseUrl = "http://localhost:5111/";
			$("#loginButtonId").click(function(){
				var userId = $("#userId").val();
				var password = $("#password").val();
				if(userId=='' || password=='')
				{
				alert("Please fill out the form");
				}
				else{
				$.post(baseUrl+'login',{email:userId,password:password},function(response,status){ 
					if(status=="success"){
						if(response.data==0){
            	window.location.href="/dashboard";
						}
						else if(response.data==1){
							alert("wrong password");
						}
						else if(response.data==2){
							alert("email not registered");
						}
						else{
							alert("error in fetching data from DB ");
						}
					}
					else{
						alert("Ajax request failed");
					}
					//alert("*----Received Data----*\n\nResponse : " + response+"\n\nStatus : " + status);
					//$("#form")[0].reset();
					//console.log(status);
					console.log(response.data);
				});
				
			}
		});
		});
