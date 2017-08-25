app.controller('searcherController', function ($scope) {

    const THEME_TYPE = "theme";

    $scope.displaySearch = false;
    $scope.searchType = "";
    $scope.searchParams = {
        title: "",
        author: "",
        ISBIN: "",
        theme: "",
        user: ""
    };

    $scope.closeSearch = function () {
        $scope.searchType == "";
        $scope.restoreSearch();
    };
    $scope.restoreSearch = function () {
        if ($scope.searchType == "") {
            $scope.searchType == "title"
        }
        $scope.books.forEach(function (book) {
            book.display = true;
        });
        $scope.searchParams = {
            title: "",
            author: "",
            ISBIN: "",
            theme: "",
            user: ""
        };
    };
    $scope.searchUser = function () {
        var display = false;
        $scope.books.forEach(function (book) {
            book.users.forEach(function (user) {
                if (user.name == $scope.searchParams.user) {
                    display = true;
                }
            });
            book.display = display;
            display = false;
        });
    };
    $scope.searchBook = function () {
        var display = false, matchTexts = [], searchText = "", searchType = $scope.searchType.toLowerCase();
        $scope.books.forEach(function (book) {
            searchText = $scope.searchParams[searchType].toLowerCase();
            matchTexts = $scope.getMatchTexts(searchType, book);
            console.log(book.display, searchType, matchTexts, searchText);
            matchTexts.forEach(function(matchText){
                if (matchText != undefined && matchText.toLowerCase().includes(searchText)){
                    display = true;
                }
            });
            book.display = display;
            display = false;
        });
    };
    $scope.getMatchTexts = function(searchType, book){
        var matchTexts = [];
        switch (searchType) {
            case "title":
            case "isbin":
                matchTexts.push(book[searchType.toLowerCase()]);
                break;
            case "author":
            case "theme":
                matchTexts.push(book.metadata.substr(20, 18).trim());
                matchTexts.push(book['author']);
                break;
            default:
                break;
        }
        return matchTexts;
    }
});