
var Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'home': 'home',
    'about': 'about',
    'submissions': 'submissions',
    'comments': 'comments',
    'users' : 'users'
  },

//#################################################

  home: function() {
    $('#content').empty();

    $.ajax({
      url: 'https://hackernewsch.herokuapp.com/submissions',
      type: 'GET'
    }).done(function(response) {

    var template = Handlebars.compile($("#submissionsTemplate").html());
      $('#content').html(template({
        submissionsList: response
      }));
    });
  },

//####################################################

    // about: function(){
    //   $('#content').empty();

    //   var template = Handlebars.compile($("#aboutTemplate").html());
    //   $('#content').html(template({
    //       name: 'Carlos'
    //   }));
    // },
//######## we can do the same thing with or withour handlebar templates! ###########
  about: function(){
    $('#content').empty();
    var name = "Carlos"

    $('#content').html('<h1> About </h1><p>Hello ' + name + ' </p>')
    },
//############################################################################
  comments: function(){
    $('#content').empty();

  },
//############################################################################
  users: function() {
    $('#content').empty();

    var template = Handlebars.compile($("#usersTemplate").html());
    $('#content').html(template({
        user: 'Carlos'
    }));

  },
//############################################################################
});

var router = new Router();

Backbone.history.start();

