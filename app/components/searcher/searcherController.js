app.controller('searcherController', function ($scope, emptyFilter) {

    const THEME_TYPE = "theme";
    const AUTHOR_TYPE = "author";

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
        var display = true, matchTexts = [], searchTexts = [], searchType = $scope.searchType.toLowerCase();
        $scope.books.forEach(function (book) {
            console.log("---------------- NUEVO LIBRO ---------------");
            console.log("---------------- " + display + "---------------");

            if (searchType == AUTHOR_TYPE) {
                matchTexts.push(book.metadata.substr(18, 20).toLowerCase().trim());
                searchTexts.push($scope.searchParams[THEME_TYPE].toLowerCase().trim());
            } else if (searchType == THEME_TYPE) {
                searchTexts.push($scope.searchParams[AUTHOR_TYPE].toLowerCase().trim());
                matchTexts.push(book['author'].toLowerCase().trim());
            }
            matchTexts.push(book[searchType.toLowerCase()]);
            searchTexts.push($scope.searchParams[searchType].toLowerCase().trim());

            //console.log(matchTexts, searchTexts);
            matchTexts.forEach(function (matchText, k) {
                console.log(matchText, searchTexts[k]);
                if (matchText == undefined ||  searchTexts[k] == undefined ||
                    (searchTexts[k] != "" && !matchText.toLowerCase().includes(searchTexts[k]))) {
                    display = false;
                }
            });
            console.log("---------------- " + display + "---------------");
            console.log("---------------- FIN LIBRO ---------------");
            book.display = display;
            matchTexts = [];
            searchTexts = [];
            display = true;
        });
    };
});