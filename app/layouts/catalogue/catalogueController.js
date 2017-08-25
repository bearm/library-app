app.controller('catalogueController', function ($scope, $location, catalogueService, toTimestampFilter) {
    $scope.books = [];
    $scope.users = [];

    catalogueService.getBooks()
        .then(function (response) {
            $scope.books = response.books;
            $scope.books.forEach(function (book) {
                book.users.forEach(function (user) {
                    if (!(user.id in $scope.users)) {
                        $scope.users.push(user.name);
                    }
                })
            });
        })
        .catch(function () {
            $location.path('/404');
        });

    catalogueService.getThemes()
        .then(function (response) {
            $scope.themes = response;
        });


    window.addEventListener("beforeunload", function (e) {
        $scope.books.forEach(function(book){
            if (book.edited && !book.saved){
                var confirmationMessage = "\o/";
                (e || window.event).returnValue = confirmationMessage;
                return confirmationMessage;
            }
        });
        return true;
    });

    $scope.saveBook = function (book) {
        book.metadata = this.generateMetadata(book);
        catalogueService.saveBook(book);
    };
    $scope.generateMetadata = function (selectedBook) {
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