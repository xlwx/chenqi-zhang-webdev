(function() {
	angular.module("WebAppMaker")
	.factory("UserService", UserService);

	function UserService($http) {
		// var users = [
		// 	{_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
		// 	{_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
		// 	{_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
		// 	{_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
		// ];

		var api = {
			"createUser": createUser,
			"findUserById": findUserById,
			"findUserByUserName": findUserByUserName,
			"findUserByCredentials": findUserByCredentials,
			"updateUser": updateUser,
			"deleteUser": deleteUser
		};

		return api;

		function createUser(user) {
			var url = "/api/assignment/user";
			return $http.post(url, user)
						.then(function(respond){
							return respond.data;
						});
		}

		function findUserById(userId) {
			var url = "/api/assignment/user/" + userId;
			return $http.get(url)
						.then(function(respond) {
							return respond.data;
						});
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
			var url = "/api/assignment/user?username=" + username + "&password=" + password;
			return $http.get(url)
						.then(function(respond) {
							return respond.data;
						});
		}

		function updateUser(userId, user) {
			var url = "/api/assignment/user/" + userId;
			return $http.put(url, user)
						.then(function(respond) {
							return respond.data;
						});
		}

		function deleteUser(userId) {
			var url = "/api/assignment/user/" + userId;
			return $http.delete(url);
		}

	}
})();