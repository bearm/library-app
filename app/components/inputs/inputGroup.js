angular.module("libraryApp")
    .directive("inputGroup", function(){
        return{
            templateUrl: 'app/components/input/input.html',
            controller: 'mainCtrl',
            replace: true,
            scope: {
                action: "=",
                class: "="
            }
        }
    });