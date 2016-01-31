import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    manageProduct: function (name, description, poster, price, itemsInStock) {
      this.sendAction('manageProduct', name, description, poster, price, itemsInStock);
    }
  }
});
