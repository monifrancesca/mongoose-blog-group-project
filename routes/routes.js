var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/blogabase');
mongoose.model(
    'Blog',
    new Schema({
            "title": String,
            "date": String,
            "text": String,
            "author": String,
            "comment": String
        },
        {
            collection: 'blogs'
        }
    ));

var Blog = mongoose.model('Blog');


router.get('/', function(req, res) {
    console.log('here');
    Blog.find({}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        res.send(data);
    });
});

router.post('/', function(req, res) {
    var addedBlog = new Blog({
        "title": req.body.blogTitle,
        "date": req.body.blogDate,
        "text": req.body.blogText,
        "author": req.body.blogAuthor,
        "comment": req.body.blogComment
    });

    addedBlog.save(function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        Blog.find({}, function(err, data) {
            if(err) {
                console.log('ERR: ', err);
            }

            res.send(data);
        });
    });
});

router.delete('/:id', function(req, res) {
    Blog.findByIdAndRemove({"_id" : req.params.id}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }

        res.send(data);
    });
});

router.put('/:id', function(req, res){
    console.log(req.body.blogTitle);
    var newTitle = req.body.blogTitle;
    var newDate = req.body.blogDate;
    var newText = req.body.blogText;
    var newAuthor = req.body.blogAuthor;
    var newComment = req.body.blogComment;
    Blog.findByIdAndUpdate(
        {_id: req.params.id},
        {
            $set: {title: newTitle,
                   date: newDate,
                   text: newText,
                   author: newAuthor,
                   comment: newComment}
        },
        function(err, data) {
            if(err) {
                console.log('ERR: ', err);
            }

            res.send(data);
        }
    );

});

module.exports = router;