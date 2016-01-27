import DS from 'ember-data';

// export default DS.Model.extend({
  
// });

var Cart = DS.Model.extend({
    name: DS.attr('string'),
    price: DS.attr('number'),
    itemsInStock: DS.attr('number'),
    totalPrice: DS.attr('number'),
    itemsNumber: DS.attr('number')
});

Cart.reopenClass({
    FIXTURES: [
      
    ]
});


export default Cart;
