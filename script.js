var array = [2,3,4,12,6,7],
	resultado1;

	function par (elemento){
		return (elemento / 2==0);
	}

	console.log(array);
	resultado1 = array.every (par);
	console.log(resultado1);