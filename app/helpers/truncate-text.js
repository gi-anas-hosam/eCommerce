import Ember from 'ember';

var truncateText = Ember.Helper.helper(function(text){
  var limit = 46;
  if (text.toString().length > limit){
    text = text.toString().substr(0, limit - 3) + "...";
  }
  return text;
});

export default truncateText;


