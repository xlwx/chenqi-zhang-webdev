module.exports = function(app) {

	var users = [
		{_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
		{_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
		{_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
		{_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
	];

	// creat user
    app.post("/api/assignment/user", createUser);

    // find user by user name
    app.get("/api/assignment/user", findUserByUsername);

    // find user by credentials
    app.get("/api/assignment/user", findUserByCredentials);

    // find user by Id
    app.get("/api/assignment/user/:userId", findUserById);

    // update user
    app.put("/api/assignment/user/:userId", updateUser);

    // delete user
    app.delete("/api/assignment/user/:userId", deleteUser);

    function createUser(req, res){
        var user = req.body;
        user._id = (new Date()).getTime()+"";
        users.push(user);
        res.json(user);
    }

    function findUserByUsername(req, res) {
        var username = req.query["username"];
        var user = users.find(function(user) {
            return user.username === username;
        });
        res.send(user);
    }

    function findUserByCredentials(req, res) {
        var username = req.query["username"];
        var password = req.query["password"];
        for(var i = 0; i < users.length; i++) {
            if(username === users[i].username && password === users[i].password) {
                res.json(users[i]);
                return;
            }
        }
        res.sendStatus(404);
    }

    function findUserById(req, res) {
        var userId = req.params["userId"];
        var user = users.find(function(user) {
            return user._id === userId;
        });
        res.send(user);     
    }

    function updateUser(req, res) {
        var user = req.body;
        var userId = req.params.userId;
        for(var i in users) {
            if(userId === users[i]._id) {
                users[i] = user;
                res.sendStatus(200);
                return;
            }
        }
        res.sendStatus(404);    
    }

    function deleteUser(req, res) {
        var userId = req.params["userId"];
        for(var i in users) {
            if(userId === users[i]._id) {
                users.splice(i, 1);
                res.sendStatus(200);
                return;
            }
        }
        res.send("Unable to delete user.");
    }
};


