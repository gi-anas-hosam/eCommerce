import Ember from 'ember';


export default Ember.Controller.extend({
	needs: 'index',
	actions: {
		addToCart: function(id, name, price,itemsInStock){
			this.get('controllers.index').send('addToCart', id, name, price, itemsInStock);
		}
	}
});