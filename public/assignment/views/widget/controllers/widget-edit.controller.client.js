(function() {
    angular
        .module("WebAppMaker")
        .controller("EditWidgetController", EditWidgetController)
       
    function EditWidgetController($routeParams, WidgetService) { 
    	var vm = this;
    	vm.pageId = $routeParams["pid"];
        vm.userId = $routeParams["uid"];
        vm.websiteId = $routeParams["wid"];
        vm.widgetId = $routeParams["wgid"];
        WidgetService
                .findWidgetById(vm.widgetId)
                .then(function(data) {
                    vm.widgetType = data.widgetType;
                });
    }
    
})();