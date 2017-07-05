(function() {
    angular
        .module("WebAppMaker")
        .controller("EditWidgetController", EditWidgetController)
       
    function EditWidgetController($routeParams) { 
    	var vm = this;
    	vm.pageId = $routeParams["pid"];
        vm.userId = $routeParams["uid"];
        vm.websiteId = $routeParams["wid"];
        vm.widgetId = $routeParams["widgetId"];

    }
    
})();