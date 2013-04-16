App.BooksController = Ember.ArrayController.extend({

	itemController: 'book'
	
});

App.BookController = Ember.ObjectController.extend({

	formattedPrice: function(){
		return "$"+this.get('price').toFixed(2);
	}.property('price')
});