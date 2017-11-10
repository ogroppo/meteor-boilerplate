log = function(){
	if(Meteor.settings.env !== 'prod')
    	console.log.apply(this, arguments);
};

warn = function(){
	if(Meteor.settings.env !== 'prod')
    	console.warn.apply(this, arguments);
};