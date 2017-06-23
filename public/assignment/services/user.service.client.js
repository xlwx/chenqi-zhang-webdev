(function() {
	angular.module("WebAppMaker")
	.factory("UserService", UserService);

	function UserService() {
		var users = [
			{_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
			{_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
			{_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
			{_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
		];

		var api = {
			"creatUser": creatUser,
			"findUserById": findUserById,
			"findUserByUserName": findUserByUserName,
			"findUserByCredentials": findUserByCredentials,
			"updateUser": updateUser,
			"deleteUser": deleteUser
		};

		return api;

		function creatUser(user) {
			users.push(user);
		}

		function findUserById(userId) {
			for(var i = 0; i < users.length; i++) {
				if(userId === users[i]._id) {
					return users[i];
				}
			}
			return null;
		}

		function findUserByUserName(username) {
			for(var i = 0; i < users.length; i++) {
				if(username === users[i].username) {
					return users[i];
				}
			}
			return null;
		}

		function findUserByCredentials(username, password) {
			for(var i = 0; i < users.length; i++) {
				if(username === users[i].username && password === users[i].password) {
					return users[i];
				}
			}
			return null;
		}

		function updateUser(userId, user) {
			for(var i = 0; i < users.length; i++) {
				if(userId === users[i]._id) {
					users[i] = user;
				}
			}
		}

		function deleteUser(userId) {
			for(var i = 0; i < users.length; i++) {
				if(userId === users[i]._id) {
					users.splice(i, 1);
				}
			}
		}

	}
})();