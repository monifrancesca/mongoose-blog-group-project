var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/blog', {
            templateUrl: '/views/templates/blog.html',
            controller: 'BlogController'
        })
        .when('/review', {
            templateUrl: '/views/templates/review.html',
            controller: 'ReviewController'
        })
        .otherwise({
            redirectTo: 'blog'
        });
}]);
