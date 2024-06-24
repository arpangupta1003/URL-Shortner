const express = require('express');
const bodyParser = require('body-parser');
const queryController = require('../Controllers/QueryController');

// Create a new router instance
const query_Route = express.Router();

// Apply middleware
query_Route.use(bodyParser.json()); // Parses JSON bodies
query_Route.use(bodyParser.urlencoded({ extended: true })); // Parses URL-encoded bodies

// Define routes
query_Route.get('/home', queryController.getHome);
query_Route.get('/getQueries', queryController.getAllQueries);
query_Route.get('/:keyword', queryController.openQueryPage);
query_Route.post('/createShortcut', queryController.createShortcut);

// Export the router
module.exports = query_Route;
