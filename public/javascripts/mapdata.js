var socket = io.connect("http://localhost:5011");



	function emitMap(map){
		socket.emit('map',{data:map});

	}


