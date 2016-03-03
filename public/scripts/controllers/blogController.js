myApp.controller('BlogController', ['$scope', 'BlogFactory', function($scope, BlogFactory) {

    $scope.blogFactory = BlogFactory;
    $scope.title = '';
    $scope.date = '';
    $scope.author = '';
    $scope.text = '';

    var blogData = {};


    $scope.saveBlog = function() {
        blogData = {
            blogTitle: $scope.title,
            blogDate: $scope.date,
            blogAuthor: $scope.author,
            blogText: $scope.text,
            blogComment: ''
        };
        console.log(blogData);
        $scope.blogFactory.factorySaveBlog(blogData);
    }
}]);