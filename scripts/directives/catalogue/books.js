angular.module("libraryApp")
    .directive("books", function(){
        return{
            templateUrl: 'templates/catalogue/books.html',
            controller: 'mainCtrl'
        }
    });