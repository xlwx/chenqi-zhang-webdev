(function() {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController)
       
    function ProfileController($routeParams, UserService, $location) { 
    	var vm = this;
    	vm.userId = $routeParams["uid"];
        vm.goToWebsite = goToWebsite;

    	function init() {
    		// UserService.findUserById(vm.userId)
      //                  .then(function(data) {
      //           vm.user = data;
      //        });
            vm.user = UserService.findUserById(vm.userId);
    	}

    	init();

        function goToWebsite() {
            $location.url("/user/" + vm.user._id + "/website");
        }

    }
    
})();