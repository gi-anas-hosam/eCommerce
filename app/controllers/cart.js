import Ember from 'ember';

const { Controller, inject } = Ember;
const { service } = inject;

export default Ember.Controller.extend({
	isAdmin: false,
	sortProperties: ['date:desc'],
	sortedRepos: Ember.computed.sort('model', 'sortProperties'),
	totalMoney: 0,
	notifications: service(),
	cartCount: function(){
			var totalMoney = 0;
			
			this.get('model').toArray().forEach(function(item) {
				if(isNaN(parseInt(item.get('itemsNumber')))){
					item.set('totalPrice',0 * item.get('price'));
			    	totalMoney += 0 * item.get('price');
				}
				else{
					item.set('totalPrice',parseInt(item.get('itemsNumber')) * item.get('price'));
			    	totalMoney += parseInt(item.get('itemsNumber')) * item.get('price');
				}
			    
			});
		
			this.set('totalMoney', totalMoney);
			
		}.observes('content.@each.itemsNumber'),
	actions: {
		goToCheckout: function(){
			var errors = false;
			this.get('model').toArray().forEach(function(item) {
			    if(isNaN(parseInt(item.get('itemsNumber'))) || parseInt(item.get('itemsNumber')) < 1 ){
			    	errors = true;
			    }
			});
			if(errors){
				this.get('notifications').error('Items number must be valid and greter than 0.');
			}
			else{
				this.transitionTo('checkout');	
			}
		},

		deleteItem: function(id){
			this.store.find('cart', id).then(function (product) {
			  	product.destroyRecord(); 
		  	});
		},

		deleteModel: function(){
			var store = this.store;
			store.find("cart").then(function(data){
				data.forEach(function(item){
			    	store.find('cart', item.id).then(function (post) {
					  post.destroyRecord(); 
					});
			    });
			});		
		}
	}

});