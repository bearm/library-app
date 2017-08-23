angular.module("libraryApp")
    .directive("footer", function(){
        return{
            templateUrl: 'app/components/footer/footer.html',
            replace: true
        }
    });