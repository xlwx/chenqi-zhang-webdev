(function() {
    angular
        .module("WebAppMaker")
        .controller("FlickrController", FlickrController)
       
    function FlickrController(FlickrService) { 
    	var vm = this;
    	vm.searchPhotos = searchPhotos;
        vm.selectPhoto = selectPhoto;

        function selectPhoto(photo) {
            
        }

        function searchPhotos(searchTerm) {
            console.log(searchTerm);
            FlickrService
                .searchPhotos(searchTerm)
                .then(function(response) {
                    data = response.data.replace("jsonFlickrApi(","");
                    data = data.substring(0,data.length - 1);
                    data = JSON.parse(data);
                    vm.photos = data.photos;
            });

        }
    }
    
})();
