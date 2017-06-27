(function() {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController)
       
    function ProfileController($routeParams, UserService, $location) { 
    	var vm = this;
    	vm.userId = $routeParams["uid"];
        vm.goToWebsite = goToWebsite;
        vm.updateUser = updateUser;
        vm.deleteUser = deleteUser;
    	
		UserService
            .findUserById(vm.userId)
            .then(function(data) {
                vm.user = data;
            });


        function goToWebsite() {
            $location.url("/user/" + vm.user._id + "/website");
        }

        function updateUser (userId, user) {
            UserService
                .updateUser(userId, user)
                .then(function() {
                    vm.message = "User updated successfully!";
                });
        }

        function deleteUser(userId) {
            UserService.deleteUser(userId)
                       .then(function() {
                            // $location.url("/login");
                       });
        }

    }
    
})();