angular.module("libraryApp")
.directive("books", function(){
    return{
        templateUrl: 'templates/books.html',
        controller: 'mainCtrl',
        replace: true
    }
});