import Ember from 'ember';

const { Controller, inject } = Ember;
const { service } = inject;

export default Ember.Controller.extend({
	isAdmin: false,
	sortProperties: ['date:desc'],
	notifications: service(),
	sortedRepos: Ember.computed.sort('model', 'sortProperties'),
	actions: {
    addToCart: function(id, name, price,itemsInStock){
			var controller = this;
			var itemFound = false;
			this.store.findAll("cart").then(function(data){
				data.forEach(function(item){
			    	if(item.id == id){
			    		itemFound = true;
			    		controller.get('notifications').info('Item Already in Cart');
			    	}
			    });
				if(!itemFound){
					var Cart = controller.store.createRecord('cart',{
						id: id,
						name: name,
					    price: price,
					    itemsInStock: itemsInStock,
					    totalPrice: price,
		    			itemsNumber: 1
					});
					Cart.save();
					controller.get('notifications').success('Item Added to Cart');
				}
			});
		}
	}

});
