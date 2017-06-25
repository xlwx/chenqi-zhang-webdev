module.exports = function(app) {

	var users = [
		{_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
		{_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
		{_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
		{_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
	];

	// creat user
    app.post("/api/user", function(req, res) {
    	var user = req.body;
    	user._id = (new Date()).getTime()+"";
    	users.push(user);
    	res.json(users);
    });

    // find user by user name
    app.get("/api/user?username=username", function(req, res) {
    	var username = req.query["username"];
    	for(var i = 0; i < users.length; i++) {
			if(username === users[i].username) {
				res.json(users[i]);
			}
		}
		res.send("No user found.");
    });

    // find user by credentials
    app.get("/api/user?username=username&password=password", function(req, res) {

    });

    // find user by Id
    app.get("/api/user/:userId", function(req, res) {
		var userId = req.params["userId"];
    	for(var i = 0; i < users.length; i++) {
			if(userId === users[i]._id) {
				res.json(users[i]);
			}
		}
		res.send("No user found.");    	
    });

    // update user
    app.get("/api/user/:userId", function(req, res) {

    });

    // delete user
    app.get("/api/user/:userId", function(req, res) {

    });
};