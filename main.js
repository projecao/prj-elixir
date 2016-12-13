var Elixir = require('laravel-elixir');

Elixir.ready(function(){
  
  // Custom notifications
  Elixir.Notification = require('./Notification').default;
  
});

global.Prj = Elixir;

module.exports = Prj;

