import Ember from 'ember';

const { Controller, inject } = Ember;
const { service } = inject;

export default Ember.Controller.extend({
	isAdmin: false,
	sortProperties: ['date:desc'],
	sortedRepos: Ember.computed.sort('model', 'sortProperties'),
	totalMoney: 0,
	notifications: service(),
  disabled1: true,
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
  disabledFn: function(){
    var self = this;
    this.store.findAll('cart').then(function(model){
      if(model.get('length') > 0){
        self.set('disabled1', false);
      }
      else {
        self.set('disabled1', true);
      }
    });

  }.observes('model.[].length'),
	actions: {
		goToCheckout: function(){
			var error1 = false;
      var error2 = false;
			this.get('model').toArray().forEach(function(item) {
			    if(isNaN(parseInt(item.get('itemsNumber'))) || parseInt(item.get('itemsNumber')) < 1 || item.get('itemsNumber') == "" ){
			    	error1 = true;
          }
          else if(parseInt(item.get('itemsNumber')) > parseInt(item.get('itemsInStock'))){
            error2 = true;
          }
			});
			if(error1){
				this.get('notifications').error('Items number must be valid and greater than 0.');
			}
      else if(error2){
        this.get('notifications').error('items number cannot exceed items in stock  number.');
      }
			else{
        this.transitionToRoute('checkout');
			}
		},

		deleteItem: function(id){
			this.store.find('cart', id).then(function (product) {
			  	product.destroyRecord();
		  	});
		},

		deleteModel: function(){
			var store = this.store;
			store.findAll("cart").then(function(data){
				data.forEach(function(item){
			    	store.find('cart', item.id).then(function (post) {
					  post.destroyRecord();
					});
			    });
			});
		}
	}

});
