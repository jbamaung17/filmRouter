//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var express = require('express');
var filmRouter = new express.Router();

filmRouter.get('/:id', function(req, res){
  res.json({data: films[req.params.id]})
});

filmRouter.post('/', function(req, res){
  films.push(req.body.film);
  res.json({data: films})
});

filmRouter.put('/:id', function(req, res){
  films[req.params.id] = req.body.film;
  res.json({data:films});
});

filmRouter.delete('/:id', function(req, res){
  films.splice(req.params.id, 1);
  res.json({data: films})
});

module.exports = filmRouter;
