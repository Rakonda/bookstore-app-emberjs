App = Ember.Application.create();
 
//Data store
App.Store = DS.Store.extend({
        revision:12,
        adapter:DS.RESTAdapter.create({
                url:"http://localhost/book-store-restful-api/api"
        })
});
//routers
App.Router.map(function(){
    this.resource('books');
    this.resource('admin');
});
 
 
App.BooksRoute = Ember.Route.extend({
        model: function(){
                return App.Book.find();
        }
});
 
App.IndexRoute = Ember.Route.extend({
        redirect: function(){
                this.transitionTo('books');
        }
});
 
App.Book = DS.Model.extend({
        isbn: DS.attr('string'),
        title: DS.attr('string'),
        author: DS.attr('string'),
        pub: DS.attr('string'),
        year: DS.attr('string'),
        price: DS.attr('string')
});