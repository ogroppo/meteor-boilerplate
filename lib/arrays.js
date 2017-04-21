isArray = function(thing){
	return Array.isArray(thing);
}

sortByProp = function(array){
	array.sort(function(a,b){
		if (a[prop] < b[prop])
			return -1;
		if (a[prop] > b[prop])
			return 1;

		return 0;
	});
}