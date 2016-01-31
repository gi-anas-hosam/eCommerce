import Ember from 'ember';
import DS from 'ember-data';

const { Controller, inject } = Ember;
const { service } = inject;

export default Ember.Controller.extend({
  cart: Ember.inject.controller('cart'),
  address: '',
	email: '',
	notifications: service(),

	actions: {
		submitOrder: function(){
			var errors = false;
			if(this.get('address').trim() == '' || this.get('email').trim() == '')	{
				this.get('notifications').error('All Fields are Required.');
				errors = true;
			}
			var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    		if(!re.test(this.get('email'))){
				this.get('notifications').error('Please Write a Valid Email.');
				errors = true;
    		}

    		if(!errors){
    			//Success
    			this.set('address','');
    			this.set('email','');
    			this.get('cart').send('deleteModel');
				  this.get('notifications').success('Order Added');
          this.transitionToRoute('index');
    		}
		}
	}


});
