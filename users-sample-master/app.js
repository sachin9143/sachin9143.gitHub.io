
var express  = require('express'),
   mongoose = require('mongoose'),
   bodyParser = require('body-parser'),

    // Mongoose Schema definition
    Schema = new mongoose.Schema({
      studentId       : String, 
      name    : String,
      department: String,
      year    : String ,   
      isPassedOut    : Boolean    
    }),

    User = mongoose.model('User', Schema);

    mongoose.connect('mongodb://mandeep:abcd123@ds013564.mlab.com:13564/nietsample');


    var app = express()
    
    app.use(bodyParser.json()); // get information from html forms
    app.use(bodyParser.urlencoded({extended: true}));
 

  app.get('/api', function (req, res) {
    res.json(200, {msg: 'OK' });
  })

  app.get('/api/users', function (req, res) {
    // http://mongoosejs.com/docs/api.html#query_Query-find
    User.find({}, function ( err, users ){
      res.status(200).json(users);
    });
  })

  app.post('/api/user', function (req, res) {
        var user = new User(
        {
        StudentId : req.body.StudentId,
        name : req.body.name,
        department : req.body.department,
        year : req.body.year,
        isPassedOut : req.body.isPassedOut
        }
    );
  
    // http://mongoosejs.com/docs/api.html#model_Model-save
    user.save(function (err, data) {
        if(!err && data){
            console.log(data)
            res.status(200).json(data)
        } else {
            console.log(err)
        }
      
    });
  })

  app.delete('/api/users', function (req, res) {
    // http://mongoosejs.com/docs/api.html#query_Query-remove
    User.remove({ isPassedOut: true }, function ( err ) {
      res.json(200, {msg: 'OK'});
    });
  })

  app.get('/api/users/:id', function (req, res) {
    // http://mongoosejs.com/docs/api.html#model_Model.findById
    User.findById( req.params.id, function ( err, todo ) {
      res.json(200, todo);
    });
  })

  app.put('/api/users/:id', function (req, res) {
    // http://mongoosejs.com/docs/api.html#model_Model.findById
    User.findById( req.params.id, function ( err, user ) {
      user.isPassedOut = req.body.completed;
      // http://mongoosejs.com/docs/api.html#model_Model-save
      todo.save( function ( err, data ){
          if(!err && data){
           res.status(200).json(data)
          } else {
              console.log(err)
          }
       
      });
    });
  })

  app.delete('/api/users/:id', function (req, res) {
    // http://mongoosejs.com/docs/api.html#model_Model.findById
    User.findById( req.params.id, function ( err, user ) {
      // http://mongoosejs.com/docs/api.html#model_Model.remove
      user.remove( function ( err, user ){
           res.status(200, {msg: 'OK'})
      });
    });
  })

  app.listen(1338);
console.log('Magic happens on port 1338');

