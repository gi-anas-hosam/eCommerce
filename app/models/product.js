import DS from 'ember-data';

var Product = DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),
    poster: DS.attr('string'),
    date: DS.attr('date'),
    price: DS.attr('number'),
    itemsInStock: DS.attr('number')
});


Product.reopenClass({
    FIXTURES: [
        
      {
       id: 1,
  name : 'Choclet 1',
  description: 'Great type of choclet',
  price: 15,
  itemsInStock: 15,
  poster: 'https://pbs.twimg.com/profile_images/1749892617/choc.jpg',
  date: '12-15-2015'
}, {
  id: 2,
  name : 'Choclet 2',
  description: 'Another great type of choclet',
  price: 25,
  itemsInStock: 0,
  poster: 'https://www.haighschocolates.com.au/media/catalog/category/D_2_LOOSE_CHOCS_crop_1.jpg',
  date: '12-25-2015'
}, {
  id: 3,
  name : 'Choclet 3',
  description: 'A Stuff you can\'t control',
  price: 15,
  itemsInStock: 2,
  poster: 'http://www.lovenwishes.com/images/newchoco004.jpg',
  date: '12-12-2015'
      }
    ]
});

export default Product;
