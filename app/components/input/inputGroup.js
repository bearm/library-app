angular.module("libraryApp")
    .directive("inputGroup", function(){
        return{
            templateUrl: 'app/shared/input/input.html',
            controller: 'mainCtrl',
            replace: true,
            scope: {
                action: "=",
                class: "="
            }
        }
    });