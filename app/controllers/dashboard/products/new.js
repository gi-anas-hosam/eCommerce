import Ember from 'ember';
import DS from 'ember-data';

const { Controller, inject } = Ember;
const { service } = inject;

export default Ember.Controller.extend({
  models: {name: '', description: '', poster: '', price: '1', itemsInStock: '0',},
  title: 'New Product',
  buttonText: 'Add Product',
	notifications: service(),
	actions: {
    createProduct: function(name, description, poster, price, itemsInStock){
      if(name == '' || description == '' || poster == '' || price == '' || itemsInStock == ''){
        this.get('notifications').error('All Fields are Required.');
        return;
      }
      var product = this.store.createRecord('product',{
        name: name,
        description: description,
        poster: poster,
        date: new Date(),
        price: parseInt(price),
        itemsInStock: parseInt(itemsInStock).toString()
      });
      var controller = this;
      product.save().then( function(){
        controller.set('name', '');
        controller.set('description', '');
        controller.set('poster', '');
        controller.set('price', '1');
        controller.set('itemsInStock', '0');
        controller.transitionToRoute('index');
      });
    }
	}


});
