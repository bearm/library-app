angular.module("libraryApp")
    .directive("footer", function(){
        return{
            templateUrl: 'templates/footer.html',
            controller: 'mainCtrl',
            replace: true
        }
    });