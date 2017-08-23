angular.module("libraryApp")
    .directive('button', function () {
        return {
            replace: true,
            restrict: 'E',
            scope: {
                text: '@',
                classname: '@'
            },
            templateUrl: 'app/shared/button/button.html'
        };
    });
;