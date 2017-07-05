module.exports = function(app) {
    var websites = [
		{ "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
		{ "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
		{ "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
		{ "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
		{ "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
		{ "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
		{ "_id": "789", "name": "Chess",       "developerId": "123", "description": "Lorem" },
		{ "_id": "1234", "name": "Facebook",    "developerId": "123", "description": "Lorem" },
		{ "_id": "2344", "name": "Tweeter",     "developerId": "123", "description": "Lorem" },
		{ "_id": "4564", "name": "Gizmodo",     "developerId": "123", "description": "Lorem" },
		{ "_id": "8904", "name": "Go",          "developerId": "123", "description": "Lorem" },
		{ "_id": "5674", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
		{ "_id": "6784", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
		{ "_id": "7894", "name": "Chess",       "developerId": "123", "description": "Lorem" },
		{ "_id": "1235", "name": "Facebook",    "developerId": "1 23", "description": "Lorem" },
		{ "_id": "2345", "name": "Tweeter",     "developerId": "123", "description": "Lorem" },
		{ "_id": "4565", "name": "Gizmodo",     "developerId": "123", "description": "Lorem" },
		{ "_id": "8905", "name": "Go",          "developerId": "123", "description": "Lorem" },
		{ "_id": "5675", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
		{ "_id": "6785", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
		{ "_id": "7895", "name": "Chess",       "developerId": "123", "description": "Lorem" }
	];

	app.post("/api/assignment/website/:userId/website", createWebsite);
	app.get("/api/assignment/website/:userId/website", findAllWebsitesForUser);
	app.get("/api/assignment/website/:websiteId", findWebsiteById);
	app.put("/api/assignment/website/:websiteId", updateWebsite);
	app.delete("/api/assignment/website/:websiteId", deleteWebsite);

	function createWebsite(req, res) {
		var userId = req.params.userId;
		var website = req.body;
		website._id = (new Date()).getTime()+"";
		website.developerId = userId;
		websites.push(website);
		res.sendStatus(200);
	}

	function findAllWebsitesForUser(req, res) {
		var userId = req.params.userId;
		var target_websites = [];
		for(var i = 0; i < websites.length; i++) {
			if(userId === websites[i].developerId) {
				target_websites.push(websites[i]);
			}
		}
		res.json(target_websites);
	}

	function findWebsiteById(req, res) {
		var websiteId = req.params.websiteId;
		var website = websites.find(function(w) {
			return websiteId === w._id;
		});
		res.json(website);
	}

	function updateWebsite(req, res) {
		var websiteId = req.params.websiteId;
		var website = req.body;
		for(var i in websites) {
			if(websiteId === websites[i]._id) {
				websites[i] = website;
				res.sendStatus(200);
				return;
			}
		}
		res.send("Unable to update.");
	}

	function deleteWebsite(req, res) {
		var websiteId = req.params.websiteId;
		for(var i in websites) {
			if(websiteId === websites[i]._id) {
				websites.splice(i,1);
				res.sendStatus(200);
				return;
			}
		}
		res.send("Unable to delete website.");
	}

};