(function() {
	angular.module("WebAppMaker")
	.factory("PageService", PageService);

	function PageService() {
		var pages = [
			{ "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
			{ "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
			{ "_id": "543", "name": "Post 3", "websiteId": "890", "description": "Lorem" }
		];


		var api = {
			"createPage": createPage,
			"findPageByWebsiteId": findPageByWebsiteId,
			"findPageById": findPageById,
			'updatePage': updatePage,
			"deletePage": deletePage
		};

		return api;

		function createPage(websiteId, page) {
			page.websiteId = websiteId;
			pages.push(page);
		}

		function findPageByWebsiteId(websiteId) {
			var target_pages = []
			for(var i = 0; i < pages.length; i++) {
				if(websiteId === pages[i].websiteId) {
					target_pages.push(pages[i]);
				}
			}
			return target_pages;
		}

		function findPageById(pageId) {
			for(var i = 0; i < pages.length; i++) {
				if(pageId === pages[i]._id) {
					return pages[i];
				}
			}
			return null;
		}

		function updatePage(pageId, page) {
			for(var i = 0; i < pages.length; i++) {
				if(pageId === pages[i]._id) {
					pages[i] = page;
				}
			}
		}

		function deletePage(pageId) {
			for(var i = 0; i < pahges.length; i++) {
				if(pageId === pages[i]._id) {
					pages.splice(i,1);
				}
			}
		}

	}
})();