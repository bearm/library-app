angular.module("libraryApp")
    .directive("catalogue", function(){
        return{
            templateUrl: 'templates/catalogue.html',
            controller: 'mainCtrl',
            replace: true
        }
    });