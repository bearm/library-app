angular.module("libraryApp")
    .directive("user", function(){
        return{
            templateUrl: 'app/components/user/user.html',
            replace: true
        }
    });