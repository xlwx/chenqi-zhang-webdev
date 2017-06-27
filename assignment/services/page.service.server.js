module.exports = function(app) {
	app.post("/api/assignment/website/:websiteId/page", createPage);
    app.get("/api/assignment/website/:websiteId/page", findAllPagesForWebsite);
    app.get("/api/assignment/page/:pageId", findPageById);
    app.put("/api/assignment/page/:pageId", updatePage);
    app.delete("/api/assignment/page/:pageId", deletePage);

    var pages = [
		{ "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
		{ "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
		{ "_id": "543", "name": "Post 3", "websiteId": "890", "description": "Lorem" }
	];

    function createPage(req, res) {
    	var websiteId = req.params.websiteId;
    	var page = req.body;
    	page._id = (new Date()).getTime() +"";
    	page.websiteId = websiteId;
    	pages.push(page);
    	res.sendStatus(200);
    }

    function findAllPagesForWebsite(req, res) {
    	var websiteId = req.params.websiteId;
    	var target_pages = [];
    	for(var i in pages) {
    		if(pages[i].websiteId === websiteId) {
    			target_pages.push(pages[i]);
    		}
    	}
    	res.json(target_pages);
    }

    function findPageById(req, res) {
    	var pageId = req.params.pageId;
    	var page = pages.find(function(p) {
    		return p._id === pageId;
    	});
    	res.json(page);
    }

    function updatePage(req, res) {
    	var pageId = req.params.pageId;
    	var page = req.body;
    	for(var i in pages) {
    		if(pages[i]._id === pageId) {
    			pages[i] = page;
    			res.sendStatus(200);
    			return;
    		}
    	}
    	res.send("Unable to update page.");
    }

    function deletePage(req, res) {
    	var pageId = req.params.pageId;
    	for(var i in pages) {
    		if(pages[i]._id === pageId) {
    			pages.splice(i,1);
    			res.sendStatus(200);
    			return;
    		}
    	}
    	res.send("Unable to delete page.");
    }
};