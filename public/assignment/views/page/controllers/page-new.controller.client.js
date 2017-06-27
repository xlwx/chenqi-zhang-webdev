(function() {
    angular
        .module("WebAppMaker")
        .controller("NewPageController", NewPageController)
       
    function NewPageController($routeParams, PageService, $location) { 
    	var vm = this;
    	vm.websiteId = $routeParams["wid"];
        vm.userId = $routeParams["uid"];
        vm.createPage = createPage;

        function createPage(websiteId, page) {
        	PageService
            .createPage(vm.websiteId, vm.page)
            .then(function() {
                $location.url("/user/" + vm.userId+ "/website/" + vm.websiteId + "/page");
            });
        }
    }
    
})();