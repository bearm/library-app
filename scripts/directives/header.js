angular.module("libraryApp")
    .directive("header", function(){
        return{
            templateUrl: 'templates/header.html',
            controller: 'mainCtrl',
            replace: true
        }
    });