'use strict';

angular.module("libraryApp")
    .service('dataService', function($http){
        this.getBooks = function(successCallback){
            $http.get('https://gist.githubusercontent.com/finizen/6f5d574cec11112342c552fe6fa64a8a/raw/68c755db1a3c255edc258b54176b98bb2b2e8d49/booksV1.json').then(successCallback);
        };
        this.deleteBook = function(book){
            console.log("the" + book.name + " has been deleted");
            // todo add the comunication with the api to delete the item
        };
        this.saveBooks = function(books){
            console.log(books.length + " has been edited and saved");
            console.log(books);
            // todo add the comunication with the api to save the item
        }
    });