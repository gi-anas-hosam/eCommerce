// app/services/notifications.js

/* global toastr */

import Ember from 'ember';

const { Service, on } = Ember;

export default Service.extend({

  initToaster: on('init', function() {
    toastr.options = {
      debug: false,
      positionClass: 'toast-top-right',
      onclick: null,
      fadeIn: 300,
      fadeOut: 1000,
      timeOut: 5000,
      extendedTimeOut: 1000
    };
  }),

  clear() {
    toastr.clear();
  },

  success(message, title) {
    toastr.success(message, title);
  },

  info(message, title) {
    toastr.info(message, title);
  },

  warning(message, title) {
    toastr.warning(message, title);
  },

  error(message, title) {
    toastr.error(message, title);
  }

});