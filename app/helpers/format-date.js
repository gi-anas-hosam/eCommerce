

var formatDate = Ember.Handlebars.makeBoundHelper(function(date) {
  return moment(date).format("MMM Do YY"); 
});

export default formatDate;