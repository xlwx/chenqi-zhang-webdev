(function() {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController)
       
    function WidgetListController($routeParams, WidgetService) { 
    	var vm = this;
    	vm.pageId = $routeParams["pid"];
        vm.userId = $routeParams["uid"];
        vm.websiteId = $routeParams["wid"];
		function init() {
			vm.widgets = WidgetService.findWidgetsByPageId(vm.pageId);
		}
		init();
    }
    
})();