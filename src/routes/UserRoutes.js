const express = require('express');
const app = express.Router();
const UserController = require('../controller/UserController');
const UserValidation = require('../middlewares/UserValidation');

// route to create user
app.post('/create', UserValidation.create, UserController.create);

// route to update user
app.put('/update/:user_id', UserValidation.update, UserController.update);

// route to delete user
app.delete('/delete/:user_id', UserValidation.delete, UserController.delete);

// route to get user by id
app.get('/get_id/:user_id', UserValidation.getId, UserController.getId);

// route to get user by search
app.get('/search/:search', UserValidation.search, UserController.search);

// route to get all users
app.get('/get_all', UserValidation.getAll, UserController.getAll);

// route to get user by email
app.get('/get_email/:email', UserValidation.getEmail, UserController.getEmail);

module.exports = app;
