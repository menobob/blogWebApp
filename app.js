var express         = require('express'),
app                 = express(),
expressSanitizer    = require('express-sanitizer'),
methodOverride      = require('method-override'),
bodyParser          = require('body-parser'),
mongoose            = require('mongoose'),
Blogs               = require("./models/blogs");
seedDB              = require("./seeds");

// APP CONFIG
mongoose.connect("mongodb://heroku_pdpsl6gd:l8djul44mcsqddsjrrhf04o8lq@ds253857.mlab.com:53857/heroku_pdpsl6gd", {useNewUrlParser: true});
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitizer());
app.use(methodOverride('_method'));
seedDB();

// RESTFUL ROUTES

app.get('/', function(req, res) {
    res.redirect('/blogs');
});

// INDEX ROUTE
app.get('/blogs', function(req, res) {
    Blogs.find({}, function(err, blogs) {
        if (err) {
            console.log(err);
        } else {
            res.render('index', {blogs: blogs});
        }
    });
});

// NEW ROUTE
app.get('/blogs/new', function(req, res) {
    res.render('new');
});

// CREATE ROUTE
app.post('/blogs', function(req, res) {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blogs.create(req.body.blog, function(err, newBlog) {
        if (err) {
            res.render('new');
        } else {
            res.redirect('/blogs');
        }
    });
});

// SHOW ROUTE
app.get('/blogs/:id', function(req, res) {
    Blogs.findById(req.params.id, function(err, foundBlog) {
        if (err) {
            console.log(err);
        } else {
            res.render('show', {blog: foundBlog});
        }
    });
});

// EDIT ROUTE
app.get('/blogs/:id/edit', function(req, res) {
    Blogs.findById(req.params.id, function(err, foundBlog) {
        if (err) {
            res.redirect('/blogs');
        } else {
            res.render('edit', {blog: foundBlog});
        }
    });
});

// UPDATE ROUTE
app.put('/blogs/:id', function(req, res) {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blogs.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog) {
        if(err) {
            res.redirect('/blogs');
        } else {
            res.redirect('/blogs/'+ req.params.id);
        }
    });
});

// DELETE ROUTE
app.delete('/blogs/:id', function(req, res) {
    Blogs.findByIdAndRemove(req.params.id, function(err) {
        if(err) {
            res.redirect("/blogs");
        } else {
            res.redirect('/blogs');
        }
    });
});


app.listen(process.env.PORT, process.eventNames.IP, function() {
    console.log("RESTful Blog App server Running");
});