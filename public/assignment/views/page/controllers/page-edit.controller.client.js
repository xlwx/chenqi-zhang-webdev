(function() {
    angular
        .module("WebAppMaker")
        .controller("EditPageController", EditPageController)
       
    function EditPageController($routeParams, PageService) { 
    	var vm = this;
    	vm.pageId = $routeParams["pid"];
        vm.websiteId = $routeParams["wid"];
        vm.userId = $routeParams["uid"];
    	function init() {
    		vm.page = PageService.findPageById(vm.pageId);
    	}

    	init();
    }
    
})();