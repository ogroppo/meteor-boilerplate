FlowRouter.route('/', {
    action: function(params, queryParams) {
		BlazeLayout.render('layout', {main: "main"});
	}
});

FlowRouter.notFound = {
    action: function() {
    	BlazeLayout.render('layout', {main: "notFound"});
    }
};