angular.module("libraryApp")
    .directive("add", function(){
        return{
            templateUrl: 'templates/buttons/button.html',
            controller: 'mainCtrl',
            replace: true
        }
    });