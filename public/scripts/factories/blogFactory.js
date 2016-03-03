myApp.factory('BlogFactory', ['$http', function($http) {

    //PRIVATE

    var blogs = undefined;

    var getBlogData = function() {
        console.log('Getting data from server');
        var promise = $http.get('/blog').then(function(response) {
            blogs = response.data;
            console.log('Async data response: ', blogs);
        });
        return promise;
    };

    var saveBlog = function(blog) {
        //console.log('saving new blog');
        var promise = $http.post('/blog', blog).then(function(response) {
            //console.log('blog saved');
            console.log(blog);
            return getBlogData();
        });
        return promise;
    };

    var updateBlog = function(update) {
        var promise = $http.put('/blog/'+ update.blogId, update).then(function(response) {
            //return getBlogData();
        });
        return promise;
    };

    var deleteBlog = function(index) {
        var promise = $http.delete('/blog/' + index).then(function(response) {
            //return getBlogData();
        });
        return promise;
    };

    //PUBLIC
    var blogFactoryOutput = {
        factorySaveBlog: function(blog) {
            return saveBlog(blog);
        },
        factoryGetBlogData: function() {
            return getBlogData();
        },
        factoryBlogData: function() {
            return blogs;
        },
        factoryUpdateBlog: function(update) {
            return updateBlog(update);
        },
        factoryDeleteBlog: function(index) {
            return deleteBlog(index);
        }
    };
    return blogFactoryOutput;


}]);