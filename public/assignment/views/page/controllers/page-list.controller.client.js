(function() {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController)
       
    function PageListController($routeParams, PageService) { 
    	var vm = this;
    	vm.websiteId = $routeParams["wid"];
        vm.userId = $routeParams["uid"];

		
		PageService
            .findPagesByWebsiteId(vm.websiteId)
            .then(function(data) {
                vm.pages = data;
            })
		
    }
    
})();