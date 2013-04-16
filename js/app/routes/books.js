App.BooksRoute = Ember.Route.extend({
	model: function(){
		return App.Book.find();
	}
});

