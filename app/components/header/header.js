angular.module("libraryApp")
    .directive("header", function(){
        return{
            templateUrl: 'app/shared/header/header.html',
            replace: true
        }
    });