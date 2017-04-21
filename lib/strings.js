isString = function(thing){
	return typeof thing === 'string';
}

isEmail = function(emailName){
	var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(emailName);
}