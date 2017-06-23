(function() {
    angular
        .module("WebAppMaker")
        .controller("NewPageController", NewPageController)
       
    function NewPageController($routeParams, PageService) { 
    	var vm = this;
    	vm.websiteId = $routeParams["wid"];
        vm.userId = $routeParams["uid"];
        vm.addPage = addPage;
        vm.page = {};
        function addPage() {
        	// need page _id for the new page
        	PageService.createPage(vm.websiteId, vm.page);
        }
    }
    
})();