i = function(string){
	return parseInt(string);
}

isInt = function(string){
	return Number.isInteger(i(string));
}

isId = function(id){
	return isInt(id);
}

compareAbs = function(number, otherNumber){
	return Math.abs(number) > Math.abs(otherNumber);
}

compareId = function(id, otherId){

	if(!isInt(id) || !isInt(otherId)){
		return false;
	}

	return i(id) === i(otherId);
}

abs = function(number){
	return Math.abs(number);
}