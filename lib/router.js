// Auth Pages
Router.map(function() {
  this.route('login', {
    path: '/auth/login',                 
    layoutTemplate: 'pageLayout',
    yieldTemplates: {
      'defaultHeader': {to: 'header'},
      'noSidebarLeft': {to: 'sidebarLeft'}
    }
  });
  this.route('registration', {
    path: '/auth/registration',                 
    layoutTemplate: 'pageLayout',
    yieldTemplates: {
      'defaultHeader': {to: 'header'},
      'noSidebarLeft': {to: 'sidebarLeft'}
    }
  });
});

var mustBeSignedIn = function(pause) {
  if (! Meteor.user() && !Meteor.loggingIn()) {
    Router.go('login');
  }
  pause();
};

var onLogin = function(pause) {
  if (Meteor.user() || Meteor.loggingIn()) {
      Router.go('home');
  }
  pause();
};

Router.onAfterAction(function() { Errors.clearSeen(); });

Router.onAfterAction(mustBeSignedIn, {except: ['login', 'registration']});
Router.onAfterAction(onLogin, {only: ['login', 'registration']});