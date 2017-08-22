'use strict';

angular.module('libraryApp')
    .controller('mainCtrl', function ($scope, dataService, toTimestampFilter) {
        $scope.books = [];
        $scope.users = [];

        dataService.getBooks()
            .then(function (response) {
                $scope.books = response.books;
                $scope.books.forEach(function(book){
                    book.users.forEach(function(user){
                        if (!(user.id in $scope.users)){
                            $scope.users[user.id] = user.name;
                        }
                    })
                });
                console.log($scope.users)
            })
            .catch(function (err) {
                console.log(err);
                // TODO 404
            });

        dataService.getThemes()
            .then(function (response) {
                $scope.themes = response;
            });

        $scope.saveBook = function (book) {
            book.metadata = this.generateMetadata(book);
            dataService.saveBook(book);
        };
        $scope.validateISBIN = function (book) {

        };
        $scope.generateMetadata = function(selectedBook){
            var paddingTheme = new Array(12).join(' ').substring(selectedBook.length);
            return "L" +
                selectedBook.isbin +
                selectedBook.theme + paddingTheme +
                new Array(20).join(' ') +
                toTimestampFilter(selectedBook.date);

        };
        $scope.deleteBook = function (book, $index) {
            console.log($scope.books, $index);
            $scope.books.splice($index, 1);
            dataService.deleteBook(book);
        };

        $scope.addBook = function () {
            var book = {
                title: "Nuevo libro",
                author: "Autor",
                metadata: "L000-0-000-00000-0                                000000000000000",
                users: {}
            };
            $scope.books.unshift(book);
        };
    })