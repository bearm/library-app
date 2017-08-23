angular.module("libraryApp")
    .directive("footer", function(){
        return{
            templateUrl: 'app/shared/footer/footer.html',
            replace: true
        }
    });