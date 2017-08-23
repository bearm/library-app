angular.module("libraryApp")
    .directive("catalogue", function(){
        return{
            templateUrl: 'app/components/catalogue/catalogue.html',
            controller: 'catalogueController',
            replace: true
        }
    });