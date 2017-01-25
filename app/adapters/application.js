import JSONAPIAdapter from 'ember-data/adapters/json-api';
import Ember from 'ember';
import DS from 'ember-data';

export default JSONAPIAdapter.extend({
  // Application specific overrides go here
  host: 'https://www.googleapis.com',
  namespace: '/books/v1/'
  
});
