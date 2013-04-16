App.Router.map(function(){
	this.resource('books', function(){
		this.resource('book', {path:':book_id'});
	});

	this.resource('admin', function(){

	});
});