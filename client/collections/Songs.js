// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  // intialize: function() {
  //   this.fetch();
  // },

  // fetch: function() {
  //   url: 'https://api.parse.com/1/classes/songs/',
  //   type: 'GET',
  //   contentType: 'application/json',
  //   success: ,
  //   error: function(data) {
  //     console.error('Failed to receive song', data);
  //   }
  // }

});