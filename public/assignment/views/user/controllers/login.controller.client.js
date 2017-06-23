(function() {
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController)
       
    function LoginController($location, UserService) { 
    	var vm = this;
    	vm.login = login;
    	function login(user) {
    		vm.user = UserService.findUserByCredentials(user.username, user.password);
    		if(vm.user) {
    			$location.url("/user/" + vm.user._id);
    		} else {
    			vm.alert = "Unable to login";
    		}
    	}
    }
    
})();
