deb = function(){
	if(Meteor.settings.ENV !== 'prod')
    	console.log.apply(this, arguments);
};

warn = function(){
	if(Meteor.settings.ENV !== 'prod')
    	console.warn.apply(this, arguments);
};