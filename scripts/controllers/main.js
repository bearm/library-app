'use strict';

angular.module('libraryApp')
    .controller('mainCtrl', function ($scope, dataService) {
        $scope.books = [];

        dataService.getBooks()
            .then(function (response) {
                $scope.books = response.books;
                console.log($scope.books);
            })
            .catch(function (err) {
                console.log(err);
                // TODO 404
            });

        $scope.saveBook = function (book) {
            console.log(book);
            books.metadata = this.generateMetadata(book);
            dataService.saveBook(book);
        };
        $scope.generateMetadata = function(selectedBook){
            var paddingTheme = Array(12).join(' ').splice(selectedBook.length);
            return "L" +
                selectedBook.isbin +
                selectedBook.theme + paddingTheme +
                Array(20).join(' ') +
                toTimestamp(selectedBook.date);

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