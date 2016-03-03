myApp.controller('ReviewController', ['$scope', 'BlogFactory', function($scope, BlogFactory) {


    var blogFactory = BlogFactory;
    $scope.title = '';
    $scope.date = '';
    $scope.author = '';
    $scope.text = '';
    $scope.comment = '';

    var blogData = {};


    $scope.updateBlog = function(blog) {
        blogData = {
            blogId: blog._id,
            blogTitle: blog.title,
            blogDate: blog.date,
            blogAuthor: blog.author,
            blogText: blog.text,
            blogComment: blog.comment
        };
        console.log(blog);
        blogFactory.factoryUpdateBlog(blogData);
    };


    $scope.blogs = blogFactory.factoryBlogData();
    blogFactory.factoryGetBlogData().then(function(){
        $scope.blogs = blogFactory.factoryBlogData();
    });
    $scope.deleteBlog = function(index){
        blogFactory.factoryDeleteBlog(index).then(function(){
            console.log('these are words');
            blogFactory.factoryGetBlogData().then(function(){
                $scope.blogs = blogFactory.factoryBlogData();
            });
    });};


    $scope.showPost = function(index) {
        $scope.blogs[index].showThis = true;
    };

}]);