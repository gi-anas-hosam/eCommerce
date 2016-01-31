import Ember from 'ember';


export default Ember.Controller.extend({
	index: Ember.inject.controller('index'),
	actions: {
		addToCart: function(id, name, price,itemsInStock){
			this.get('index').send('addToCart', id, name, price, itemsInStock);
		}
	}
});
