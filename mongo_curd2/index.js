const fs = require('fs');
const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const MongoClient = require('mongodb').MongoClient;
var router = express.Router();
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
const PORT = 8008;
​
app.use(express.json());
app.use(express.urlencoded());
app.use('/public', express.static('public'));
const hbs = exphbs.create({
    extname: '.hbs',
})
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
​
const url = 'mongodb://localhost:27017';
var db = null;
// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
    if (err) {
        console.log(err);
    }
    console.log("Connected successfully to server");
​
    db = client.db('eagle-salman-ahmed');
​
})
​
​
//Book Library
app.get('/', function (req, res) {
    return res.redirect('/users');
})
​
app.post('/users', function (req, res) {
    var data = req.body;
    console.log(data);
    var collection = db.collection('users');
​
    collection.insertOne(data, function (error, result) {
        if (error) {
            return res.send({
                status: false,
                message: 'Failed to add student'
            });
        } else {
            return res.redirect('/users');
        }
    })
});
​
app.get('/users', function (req, res) {
    var collection = db.collection('users');
    console.log("Get >>>>", req.query);
​
    collection.find().toArray(function (error, result) {
        if (error) {
            return res.send({
                status: false,
                message: 'Failed to get students'
            });
        } else {
​
            return res.render('homepage', {
                value: result
            })
        }
    })
});
​
app.put('/users/:id', function (req, res) {
    var data = req.body;
    var collection = db.collection('users');
    console.log("Put >>>>>", data);
    collection.updateOne({ username: data.username }, { $set: data }, function (error, result) {
        if (error) {
            return res.send({
                status: false,
                message: 'Failed to update student'
            });
        } else {
            return res.redirect('/users');
​
        }
    })
});
​
app.delete('/users/:id', function (req, res) {
    var collection = db.collection('users');
    var data = req.params.id;
    console.log("Delete >>>>>>", data);
    collection.deleteOne({ username: data }, function (error, result) {
        if (error) {
            return res.send({
                status: false,
                message: 'Failed to delete students'
            })
        }
        else {
            return res.redirect('/users');
        }
    }
    )
});
​
​
//Port
app.listen(PORT, function () {
    console.log("Started : ", PORT);
}).on('error', function () {
    console.log("Unable To Start App >>>", error);
​
}) 