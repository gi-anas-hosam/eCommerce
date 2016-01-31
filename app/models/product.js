import DS from 'ember-data';

//var Product = DS.Model.extend({
export default DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),
    poster: DS.attr('string'),
    date: DS.attr('date'),
    price: DS.attr('number'),
    itemsInStock: DS.attr('string')
});

