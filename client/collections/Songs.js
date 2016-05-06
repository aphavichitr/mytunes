// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url: 'https://api.parse.com/1/classes/songs/',
  initialize: function() {

    //backbone fetch method
    this.fetch();
  },

  // fetch: function() {
  //   //console.log(this);
  //   $.ajax({
  //     url: 'https://api.parse.com/1/classes/songs/',
  //     type: 'GET',
  //     contentType: 'application/json',
  //     success: function(data) {
  //       this.parse(data);
  //     },
  //     error: function(data) {
  //       console.error('Failed to receive song', data);
  //     },
  //   });
  // },

  // after backbone fetch method is called it will parse the result
  // only if parse method exists
  // then it will trigger a 'sync' event
  parse: function(response) {
    return response.results;
  }

});