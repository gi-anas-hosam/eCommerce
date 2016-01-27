import Ember from 'ember';

export default Ember.Controller.extend({
	sortProperties: ['date:desc'],
	sortedRepos: Ember.computed.sort('model', 'sortProperties'),
  	isAdmin: true, 
  	actions: {
  		deleteProduct: function(id){
  			this.store.find('product', id).then(function (product) {
			  product.destroyRecord(); 
			});
  		}
  	}
});