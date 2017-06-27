(function() {
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController)
       
    function LoginController($location, UserService) { 
    	var vm = this;
    	vm.login = login;
    	function login(user) {
    		UserService
                .findUserByCredentials(user.username, user.password)
                .then(login, handleError);

            function login(user){
                if(user) {
                    $location.url("/user/" + user._id);
                }
            }

            function handleError(error) {
                vm.alert = "Unable to login";
            }
    		
    	}
    }
    
})();
