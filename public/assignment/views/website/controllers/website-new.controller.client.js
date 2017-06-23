(function() {
    angular
        .module("WebAppMaker")
        .controller("NewWebsiteController", NewWebsiteController);
       
    function NewWebsiteController($routeParams, WebsiteService) { 
    	var vm = this;
        vm.userId = $routeParams["uid"];
        vm.addWebsite = addWebsite;
        vm.website = {};

        function init() {
        	 vm.websites = WebsiteService.findWebsitesByUser(vm.userId);
        }

        init();

        function addWebsite() {
        	// need a _id for the new website
        	WebsiteService.createWebsite(vm.userId,vm.website);
        }
    }
    
})();