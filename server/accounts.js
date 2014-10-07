Accounts.onCreateUser(function(options, user) {
		
	if (user.profile == null) {
		user.profile = {};
		if (options.profile != null) {
			user.profile.name = options.profile.name;
		}
	}
	
	return user;
});