// SongQueue.js - Defines a backbone model class for the song queue.

//Collection of the all the SongModels
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function () {
      if (this.length === 1) {
        this.playFirst();
      }     
    }, this);

    //removes song when ended and continues if there are other songs
    this.on('ended', function () {
      this.remove(this.at(0));
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    //removes it entirely
    this.on('dequeue', function () {
      //this.shift();
      this.remove(this.at(0));
    }, this);
  },

  playFirst: function() {
    this.at(0).play();
  }

}); 