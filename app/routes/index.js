import Ember from 'ember';


export default Ember.Route.extend({
	model: function(){
    /*return this.store.findAll('product');*/
    return this.store.filter('product', {}, function(item) {
        return item.get('itemsInStock') > 0;
      });
    }
});
