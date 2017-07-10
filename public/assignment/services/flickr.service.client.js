(function() {
	angular.module("WebAppMaker")
	.service("FlickrService", FlickrService);

	function FlickrService($http) {
		// var api = {
		// 	"searchPhotos": searchPhotos			
		// };

		// return api;
		this.searchPhotos = searchPhotos;


		var key = "3999298c6cdca6565c8bd232dea93994";
		var secret = "ba83970e6c1f4514";
		var urlBase = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT";
		
		function searchPhotos(searchTerm) {
			var url = urlBase.replace("API_KEY", key).replace("TEXT", searchTerm);
	    	return $http.get(url);
		}


	}
})();