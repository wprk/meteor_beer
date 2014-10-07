Template.accountLoggedIn.events({
  "click #logout": function (event) {
    event.preventDefault();
    Meteor.logout(function() {
        Errors.throw('danger', 'You have been logged out.');
        Router.go('login');
    });
  }
});