'use strict';

angular.module('libraryApp')
    .controller('mainCtrl', function ($scope, dataService) {

        dataService.getBooks(function (response) {
            $scope.books = response.data.books;
        });

        $scope.saveBooks = function () {
            var filteredBooks = $scope.books.filter(function(book){
                if (book.edited){
                    return book;
                }
            });
            dataService.saveBooks(filteredBooks);
        };

        $scope.deleteBook = function (book, index) {
            dataService.deleteBook(book);
            $scope.books.splice(index, 1)
        };

        $scope.addBook = function () {
            var book = {
                name: "this is a book new"
            };
            $scope.books.unshift(book);
        };
    })