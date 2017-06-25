(function() {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController)
       
    function RegisterController(UserService, $location) { 
    	var vm = this;
    	vm.register = register;
    	vm.user = {};
    	function register(user) {
    		UserService
    			.creatUser(user, function(user){
    					$location.url("/user/" + vm.user._id);
    			});
    	}

    }
    
})();