const express = require('express');
const app = express.Router();
const CategoryController = require('../controller/CategoryController');
const CategoryValidation = require('../middlewares/CategoryValidation');

// route to create category
app.post('/create', CategoryValidation.create, CategoryController.create);

// route to update category
app.put(
  '/update/:category_id',
  CategoryValidation.update,
  CategoryController.update
);

// route to delete category
app.delete(
  '/delete/:category_id',
  CategoryValidation.delete,
  CategoryController.delete
);

// route to get category
app.get(
  '/get_id/:category_id',
  CategoryValidation.getId,
  CategoryController.getId
);

// route to get all categories
app.get('/get_all', CategoryValidation.getAll, CategoryController.getAll);

module.exports = app;
