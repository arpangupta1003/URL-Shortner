const express = require('express');
const bodyParser = require('body-parser');
const userController = require('../Controllers/UserController');

// Create a new router instance
const user_Route = express.Router();

// Apply middleware
user_Route.use(bodyParser.json()); // Parses JSON bodies
user_Route.use(bodyParser.urlencoded({ extended: true })); // Parses URL-encoded bodies

// Define routes
user_Route.get('/home', userController.getHome);
user_Route.get('/getAllUsers', userController.getAllUsers);

user_Route.post('/createUser', userController.createUser);

// Export the router
module.exports = user_Route;
