angular.module("libraryApp")
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "index.htm"
            })
            .when("/404", {
                templateUrl: "404.htm"
            });
    });