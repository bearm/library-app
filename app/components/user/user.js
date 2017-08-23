angular.module("libraryApp")
    .directive("user", function(){
        return{
            templateUrl: 'app/shared/user/user.html',
            replace: true
        }
    });