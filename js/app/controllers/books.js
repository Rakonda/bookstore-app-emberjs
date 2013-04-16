App.BookController = Ember.ObjectController.extend({
	formattedPrice: function(){
		return "$"+this.get('price').toFixed(2);
	}.property('price'),

	imageUrl: function(){
		var img = this.get('image');
		return "http://localhost/book-store-restful-api/images/book_covers/"+img;
	}.property('image')
});