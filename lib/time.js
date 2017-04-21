timer = function(cb, time = 500){
	return Meteor.setTimeout(cb, time);
}

clear = function(handle){
	Meteor.clearTimeout(handle);
}

interval = function(cb, time = 10){
	return Meteor.setInterval(cb, time);
}

stop = function(handle){
	Meteor.clearInterval(handle);
}