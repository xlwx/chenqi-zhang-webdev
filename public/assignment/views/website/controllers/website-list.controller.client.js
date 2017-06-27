(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController)
       
    function WebsiteListController($routeParams, WebsiteService) { 
    	var vm = this;
    	vm.userId = $routeParams["uid"];
		
		WebsiteService
            .findWebsitesByUser(vm.userId)
            .then(function(data) {
                vm.websites = data;
            });
		

    }
    
})();