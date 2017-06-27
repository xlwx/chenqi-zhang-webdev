(function() {
    angular
        .module("WebAppMaker")
        .controller("EditWebsiteController", EditWebsiteController);
       
    function EditWebsiteController($routeParams, WebsiteService, $location) { 
    	var vm = this;
    	vm.websiteId = $routeParams["wid"];
        vm.userId = $routeParams["uid"];
        vm.updateWebsite = updateWebsite;
        vm.deleteWebsite = deleteWebsite;

    	
    	WebsiteService
            .findWebsiteById(vm.websiteId)
            .then(function(data) {
                vm.website = data;
            });

        WebsiteService
            .findWebsitesByUser(vm.userId)
            .then(function(data) {
                vm.websites = data;
            });

        function updateWebsite(websiteId, website) {
            WebsiteService
                .updateWebsite(vm.websiteId, website)
                .then(function() {
                    vm.message = "Website updated successfully!";
                });
        }

        function deleteWebsite(websiteId) {
            WebsiteService
                .deleteWebsite(vm.websiteId)
                .then(function() {
                    $location.url("/user/" + vm.userId + "/website");
                });
        }

    }
    
})();