/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var projectRouter = express.Router();

  // projectRouter.get('/', function(req, res) {
  //   res.send({
  //     'project': []
  //   });
  // });

  projectRouter.get('/', function(req, res) {
    res.send({
      "products": [
      {
        "id": 1,
        "name" : "Choclet 1",
        "description": "Great type of choclet",
        "price": 15,
        "itemsInStock": 15,
        "poster": "https://pbs.twimg.com/profile_images/1749892617/choc.jpg",
        "date": "12-15-2015"
      }, 
      {
        "id": 2,
        "name" : "Choclet 2",
        "description": "Another great type of choclet",
        "price": 25,
        "itemsInStock": 0,
        "poster": "https://www.haighschocolates.com.au/media/catalog/category/D_2_LOOSE_CHOCS_crop_1.jpg",
        "date": "12-25-2015"
      }, 
      {
        "id": 3,
        "name" : "Choclet 3",
        "description": "A Stuff you can't control",
        "price": 15,
        "itemsInStock": 2,
        "poster": "http://www.lovenwishes.com/images/newchoco004.jpg",
        "date": "12-12-2015"
      }
    ]
    });
  });

  projectRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  projectRouter.get('/:id', function(req, res) {
    res.send({
      'products': {
        id: req.params.id
      }
    });
  });

  projectRouter.put('/:id', function(req, res) {
    res.send({
      'products': {
        id: req.params.id
      }
    });
  });

  projectRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/project', require('body-parser'));
  //app.use('/api/project', projectRouter);
  app.use('/api/products', projectRouter);
};
