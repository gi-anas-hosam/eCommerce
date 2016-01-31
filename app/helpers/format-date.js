import Ember from 'ember';

var formatDate = Ember.Helper.helper(function(date) {
  date = date.toString();
  return moment(new Date(date)).format("MMM Do YY");
});

export default formatDate;
