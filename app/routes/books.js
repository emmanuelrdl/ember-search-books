import Ember from 'ember';

export default Ember.Route.extend({
  model() {

    return Ember.$.ajax({
      url: "https://www.googleapis.com/books/v1/volumes?q=paris",
      dataType: "jsonp",
      error: function(xhr, status, error) {
         console.log("Error");
         console.log(xhr.statusText);
         console.log(xhr.responseText);
         console.log(xhr.status);
         console.log(error);
     }
   });
  }
});

// http://ippon.developpez.com/tutoriels/javascript/ember-et-contre-tous/
