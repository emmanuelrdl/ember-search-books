import JSONAPIAdapter from 'ember-data/adapters/json-api';
import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  // Application specific overrides go here
  host: 'https://www.googleapis.com',
  urlForFindAll() {
    return 'https://www.googleapis.com/books/v1/volumes?q=paris';
  },

  findAll(coucu) {
      return new Ember.RSVP.Promise(function(resolve, reject) {
        Ember.$.getJSON('https://www.googleapis.com/books/v1/volumes?q=paris', '').then(function(data) {
          resolve(data);
        }, function(jqXHR) {
          reject(jqXHR);
        });
      });
    }


});
