App.Book = DS.Model.extend({
	author: DS.attr("string"),
	image: DS.attr("string"),
	isbn: DS.attr("string"),
	price: DS.attr("number"),
	pub: DS.attr("string"),
	title: DS.attr("string"),
	year: DS.attr("string")
});