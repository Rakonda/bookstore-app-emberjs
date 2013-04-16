App.Store = DS.Store.extend({
	revision:12,
	adapter: DS.RESTAdapter.create({
		url:"http://localhost/book-store-restful-api/api"
	})
});