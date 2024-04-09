"use strict";

// imports and require statements
const express = require("express");
const createServer = require("http-errors");
const path = require("path");
const productsRoute = require("./routes/products");

// swagger
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");
// https://levelup.gitconnected.com/how-to-add-swagger-ui-to-existing-node-js-and-express-js-project-2c8bad9364ce
// Also to note there was a missing bin/www.json file that had to be added to use express and swagger after that.

// Create the Express app
const app = express();

// Configure the app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  express.static(path.join(__dirname, "../dist/mdb-angular-ui-kit-free"))
);
app.use(
  "/",
  express.static(path.join(__dirname, "../dist/mdb-angular-ui-kit-free"))
);

// our routes from our routes folder
app.use("/products", productsRoute);

// more swagger: openapi specification
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Nodebucket RESTful APIs",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"], //files containing annotations for the OpenAPI Specification
};

// more swagger: wire openapiSpecification to app variable
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Error handler for 404 errors
app.use(function (req, res, next) {
  next(createServer(404)); // forward to error handler
});

// Error handler for all other errors
app.use(function (err, req, res, next) {
  res.status(err.status || 500); // set response status code

  // Send response to client in JSON format with a message and stack trace
  res.json({
    type: "error",
    status: err.status,
    message: err.message,
    stack: req.app.get("env") === "development" ? err.stack : undefined,
  });
});

// Export the Express application
module.exports = app;
