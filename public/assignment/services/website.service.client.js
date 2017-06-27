(function() {
	angular.module("WebAppMaker")
	.factory("WebsiteService", WebsiteService);

	function WebsiteService($http) {
		// var websites = [
		// 	{ "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
		// 	{ "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
		// 	{ "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
		// 	{ "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
		// 	{ "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
		// 	{ "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
		// 	{ "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
		// ];

		var api = {
			"createWebsite": createWebsite,
			"findWebsitesByUser": findWebsitesByUser,
			"findWebsiteById": findWebsiteById,
			'updateWebsite': updateWebsite,
			"deleteWebsite": deleteWebsite
		};

		return api;

		function createWebsite(userId, website) {
			var url = "/api/assignment/website/" + userId+ "/website";
			return $http.post(url, website);
		}

		function findWebsitesByUser(userId) {
			var url = "/api/assignment/website/" + userId + "/website";
			return $http.get(url)
					    .then(function(respond) {
					    	return respond.data;
					    });
		}

		function findWebsiteById(websiteId) {
			var url = "/api/assignment/website/" + websiteId;
			return $http.get(url)
						.then(function(respond) {
							return respond.data;
						})
		}

		function updateWebsite(websiteId, website) {
			var url = "/api/assignment/website/" + websiteId;
			return $http.put(url, website);
		}

		function deleteWebsite(websiteId) {
			var url = "/api/assignment/website/" + websiteId;;
			return $http.delete(url);
		}

	}
})();