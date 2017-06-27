(function() {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController)
       
    function RegisterController(UserService, $location) { 
    	var vm = this;
    	vm.register = register;
    	
    	function register(user) {
            var username = user.username,
                password = user.password, 
                vpassword = vpassword;
    		if(password !== vpassword) {
                vm.error = "Password not match!"
            }

            // var user = UserService
            //     .findUserByUserName(username)
            //     .then(function(data) {
            //         if(data) {
            //             vm.error = "Username is not available."
            //         } else {
            //             var user = {
            //                 username: username,
            //                 password: password
            //             };
            //         }  
            //     })
            var user = null;

            if(user !== null) {
                vm.error = "Username is not available."
            } else {
                var user = {
                    username: username,
                    password: password
                };

                UserService.createUser(user).then(goToProfile);
            }

            function goToProfile(user) {
                $location.url("/user/" + user._id);
            }
    	}

    }
    
})();