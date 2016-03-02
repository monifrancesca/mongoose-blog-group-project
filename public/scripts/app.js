var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html'
            //controller: 'homeController'
        })
        .when('/blog', {
            templateUrl: '/views/templates/blog.html',
            controller: 'BlogController'
        })
        .when('/review', {
            templateUrl: '/views/templates/review.html',
            controller: 'ReviewController'
        })
        .otherwise({
            redirectTo: 'home'
        });
}]);
