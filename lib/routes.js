FlowRouter.route('/', {
  action: function(params, queryParams) {
		BlazeLayout.render('layout', {main: "main"});
	}
});

FlowRouter.route('/:first/', {
  action: function(params, queryParams) {
		console.log(params, queryParams);
	}
});

FlowRouter.route('/:first/:second', {
  action: function(params, queryParams) {
		console.log(params, queryParams);
	}
});

FlowRouter.notFound = {
    action: function() {
    	BlazeLayout.render('layout', {main: "notFound"});
    }
};
