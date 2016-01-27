import Ember from 'ember';
import DS from 'ember-data';

const { Controller, inject } = Ember;
const { service } = inject;


export default Ember.Controller.extend({
	
	notifications: service(),
	actions: {
		UpdateProduct: function(){
			if(this.get('model.name') == '' || this.get('model.description') == '' || this.get('model.poster') == '' || this.get('model.price') == '' || this.get('model.itemsInStock') == ''){
				this.get('notifications').error('All Fields are Required.');
				return;
			}
			var product = this.get('model');
            product.setProperties({
                name: this.get('model.name'),
				description: this.get('model.description'),
			    poster: this.get('model.poster'),
			    itemsInStock: parseInt(this.get('model.itemsInStock')),
			    price: parseInt(this.get('model.price')),
			    date: new Date()
            });
			var controller = this;
            product.save().then( function(){
				controller.transitionTo('index');
			});
                
		}
	}
	

});