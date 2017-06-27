(function() {
    angular
        .module("WebAppMaker")
        .controller("EditPageController", EditPageController)
       
    function EditPageController($routeParams, PageService, $location) { 
    	var vm = this;
    	vm.pageId = $routeParams["pid"];
        vm.websiteId = $routeParams["wid"];
        vm.userId = $routeParams["uid"];
        vm.deletePage = deletePage;
        vm.updatePage = updatePage;
    	
    	PageService
            .findPageById(vm.pageId)
            .then(function(data) {
                vm.page = data;
            });
    	
        function updatePage(pageId, page) {
            PageService
                .updatePage(pageId, page) 
                .then(function() {
                    vm.message = "Page updated successfully.";
                });
        } 	

        function deletePage(pageId) {
            PageService
                .deletePage(pageId)
                .then(function() {
                    $location.url("/user/"+ vm.userId +"/website/" + vm.websiteId + "/page");
                })
        }
    }
    
})();