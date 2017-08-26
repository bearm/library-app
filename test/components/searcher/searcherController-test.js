describe('Library tests', function () {

    var scope;
    var ctrl;
    var books = [
        {
            "title": "Cien años de soledad",
            "author": "Gabriel García Márquez",
            "metadata": "L978-3-598-21500-1novela                          000000221184000",
            "users": [{"id": 1, "name": "Isidro Pérez"}, {"id": 2, "name": "José Manuel Santos"}, {
                "id": 3,
                "name": "Trinidad Alonso"
            }]
        },
        {
            "title": "Las Aventuras de Huckleberry Finn",
            "author": "Mark Twain",
            "metadata": "L978-3-598-21501-8aventura                        000000477619200",
            "users": [{"id": 4, "name": "Jose Miguel Sanchez"}, {"id": 5, "name": "Beatriz Reyes"}, {
                "id": 6,
                "name": "Rosario Garcia"
            }]
        }
    ];

    beforeEach(module('libraryApp'));

    describe("searcherController Initialization", function () {
        it('should create "phones" model with 3 phones',
            inject(function ($rootScope, $controller) {
                    var scope = $rootScope.$new();
                    var ctrl = $controller("searcherController", {$scope: scope});
                    expect(scope.displaySearch).to.equal(false);
                }
            ));
        it('restore search should set vars to empty',
            inject(function ($rootScope, $controller) {
                var scope = $rootScope.$new();
                var ctrl = $controller("searcherController", {$scope: scope});
                scope.books = books;
                scope.searchType = "";
                scope.searchParams['title'] = "text";
                scope.searchParams['author'] = "text";
                scope.restoreSearch();
                expect(scope.searchType).to.equal("title");
                expect(scope.searchParams['title']).to.equal("");
                expect(scope.searchParams['author']).to.equal("");
            }));
        it('search user should show only books that the user have read',
            inject(function ($rootScope, $controller) {
                var scope = $rootScope.$new();
                var ctrl = $controller("searcherController", {$scope: scope});
                scope.books = books;
                scope.searchParams.user = "Beatriz Reyes";
                scope.searchUser();
                expect(scope.books[1].display).to.equal(true);
                expect(scope.books[0].display).to.equal(false);
            }));
        it('Search by title should NOT be compatible with other searches',
            inject(function ($rootScope, $controller) {
                var scope = $rootScope.$new();
                var ctrl = $controller("searcherController", {$scope: scope});
                var searchParameters,
                book =  {
                    "title": "Las Aventuras de Huckleberry Finn",
                    "author": "Mark Twain",
                    "metadata": "L978-3-598-21501-8aventura                        000000477619200",
                    "users": [{"id": 4, "name": "Jose Miguel Sanchez"}, {"id": 5, "name": "Beatriz Reyes"}, {
                        "id": 6,
                        "name": "Rosario Garcia"
                    }]
                }, searchParams = {
                    title: "Huck",
                    author: "",
                    ISBIN: "",
                    theme: "",
                    user: ""
                };
                searchParameters = scope.getSearchParams("title", book, searchParams);
                expect(searchParameters[0][0]).to.equal("Las Aventuras de Huckleberry Finn");
                expect(searchParameters[1][0]).to.equal("huck");
            }));
        it('Search by title should contains the word searched',
            inject(function ($rootScope, $controller) {
                var scope = $rootScope.$new();
                var ctrl = $controller("searcherController", {$scope: scope});

            }));
    });
});
