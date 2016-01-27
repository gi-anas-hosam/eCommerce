import Ember from 'ember';
import DS from 'ember-data';

const { Controller, inject } = Ember;
const { service } = inject;

export default Ember.Controller.extend({
	name: '',
	description: '',
	poster: '',
	price: '1',
	itemsInStock: '0',
	notifications: service(),
	actions: {
		createProduct: function(){
			if(this.get('name') == '' || this.get('description') == '' || this.get('poster') == '' || this.get('price') == '' || this.get('itemsInStock') == ''){
				this.get('notifications').error('All Fields are Required.');
				return;
			}
			var product = this.store.createRecord('product',{
				name: this.get('name'),
				description: this.get('description'),
			    poster: this.get('poster'),
			    date: new Date(),
			    price: parseInt(this.get('price')),
			    itemsInStock: parseInt(this.get('itemsInStock'))
			});
			var controller = this;
			product.save().then( function(){
				controller.set('name', '');
				controller.set('description', '');
				controller.set('poster', '');
				controller.set('price', '1');
				controller.set('itemsInStock', '0');
				controller.transitionTo('index');
			});
		}
	}
	

});