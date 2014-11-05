
var Router = Backbone.Router.extend({
    routes: {
        '': 'home',
        'home': 'home',
        'about': 'about',
        'submissions': 'submissions',
        'comments': 'comments',
        'users' : 'users'
    },

    home: function() {
      $('#content').empty();

      $.ajax({
          url: 'https://secret-escarpment-1540.herokuapp.com/users',
          type: 'GET'
      }).done(function(response) {
          console.table(response);
      });
    },

    about: function(){
      $('#content').empty();

      var template = Handlebars.compile($("#aboutTemplate").html());
      $('#content').html(template({
          name: 'Carlos'
      }));
    },

    comments: function(){
      $('#content').empty();


    },



    users: function() {
      $('#content').empty();

      var template = Handlebars.compile($("#usersTemplate").html());
      $('#content').html(template({
          user: 'Carlos'
      }));

      // $.ajax({
      //     url: 'https://secret-escarpment-1540.herokuapp.com/users',
      //     type: 'GET'
      // }).done(function(response) {
      //     console.table(response);
      // });
    },

});

var router = new Router();

Backbone.history.start();

