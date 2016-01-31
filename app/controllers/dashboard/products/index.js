import Ember from 'ember';

export default Ember.Controller.extend({
	sortProperties: ['date:desc'],
	sortedRepos: Ember.computed.sort('model', 'sortProperties'),
  	isAdmin: true,
    isShowingModal: false,
    currentlyDeleting: 0,
  	actions: {
      deletConfirm: function(id) {
        if(!this.get('isShowingModal')){
          this.set('isShowingModal',true);
          this.set('currentlyDeleting',id);
        }
      },
      deleteProduct: function(){
        var self = this;
        this.store.find('product', this.get('currentlyDeleting')).then(function (product) {
          product.destroyRecord();
          self.set('isShowingModal',false);
        });
      },
      cancel: function(id){
        this.set('isShowingModal',false);
      }
  		//deleteProduct: function(id){
  		//	this.store.find('product', id).then(function (product) {
			//  product.destroyRecord();
			//});
  		//}
  	}
});
