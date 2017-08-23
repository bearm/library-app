angular.module('libraryApp')
    .controller('catalogueController', function ($scope, catalogueService, toTimestampFilter) {
        $scope.books = [];
        $scope.users = [];

        catalogueService.getBooks()
            .then(function (response) {
                /*console.log($location.path('/404'));

                $location.path('/404');*/

                $scope.books = response.books;
                $scope.books.forEach(function(book){
                    book.users.forEach(function(user){
                        if (!(user.id in $scope.users)){
                            $scope.users[user.id] = user.name;
                        }
                    })
                });
            })
            .catch(function () {
                //$location.path('/404');
            });

        catalogueService.getThemes()
            .then(function (response) {
                $scope.themes = response;
            });

        $scope.saveBook = function (book) {
            book.metadata = this.generateMetadata(book);
            catalogueService.saveBook(book);
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
             $scope.books.splice($index, 1);
            catalogueService.deleteBook(book);
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