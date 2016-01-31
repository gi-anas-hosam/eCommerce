import Ember from 'ember';
import DS from 'ember-data';

const { Controller, inject } = Ember;
const { service } = inject;


export default Ember.Controller.extend({
  title: 'Edit Product',
  buttonText: 'Update Product',
	notifications: service(),
	actions: {
    UpdateProduct: function(name, description, poster, price, itemsInStock){
      if(name == '' || description == '' || poster == '' || price == '' || itemsInStock == ''){
        this.get('notifications').error('All Fields are Required.');
        return;
      }
      var product = this.get('model');
      product.setProperties({
        name: name,
        description: description,
        poster: poster,
        itemsInStock: parseInt(itemsInStock).toString(),
        price: parseInt(price),
        date: new Date()
      });
      var controller = this;
      product.save().then( function(){
        controller.transitionToRoute('index');
      });

    }
	}


});
