(function() {
    angular
        .module("WebAppMaker")
        .controller("NewWebsiteController", NewWebsiteController);
       
    function NewWebsiteController($routeParams, WebsiteService, $location) { 
    	var vm = this;
        vm.userId = $routeParams["uid"];
        vm.createWebsite = createWebsite;
        vm.website = {};

        WebsiteService
            .findWebsitesByUser(vm.userId)
            .then(function(data) {
                vm.websites = data;
            });

        function createWebsite(userId, website) {
        	WebsiteService
            .createWebsite(userId, website)
            .then(function() {
                $location.url("/user/" + vm.userId + "/website");
            });
        }
    }
    
})();