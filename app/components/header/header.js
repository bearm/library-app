angular.module("libraryApp")
    .directive("header", function(){
        return{
            templateUrl: 'app/components/header/header.html',
            replace: true
        }
    });