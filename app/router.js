import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

   this.route('cart');
   this.route('checkout');
   this.route('product', {path: '/:id'});

   this.route('dashboard', function() {
    this.route('products', function() {
      this.route('new');
      this.route('product', {path: '/:id'});
    });
  });
});

export default Router;
