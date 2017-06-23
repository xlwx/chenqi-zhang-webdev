(function() {
    angular
        .module("WebAppMaker")
        .controller("NewWidgetController", NewWidgetController)
       
    function NewWidgetController($routeParams) { 
    	var vm = this;
    	vm.pageId = $routeParams["pid"];
        vm.userId = $routeParams["uid"];
        vm.websiteId = $routeParams["wid"];
    }
    
})();