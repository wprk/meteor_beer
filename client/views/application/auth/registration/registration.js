Template.registration.events({
  "click #register": function (event) {
    event.preventDefault();

    firstName = $('input#firstName').val(),
    familyName = $('input#familyName').val(),
    username = firstName + '.' + familyName,
    email = $('input#email').val(),
    password = $('input#password').val(),
    profile = {
        name: firstName + ' ' + familyName
    },
    roles = {};

    Accounts.createUser({
        email: email,
        username: username,
        password: password,
        profile: profile,
        roles: roles
    }, function(error) {
        if (error) {
            Errors.throw('danger', error);
        }
    });
  }
});