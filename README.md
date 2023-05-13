## Fastify CRUD and Authentication Project

### Demo Link

A live demo of the project can be accessed at (https://seemly-holistic-nerve.glitch.me)

### Installation Guide

https://github.com/WaiYanLin71/fastify-mvc/blob/main/Installation.md

### Welcome Contributors

We welcome contributions from developers who are interested in helping to improve the Fastify CRUD and Authentication project

### Project Description

The Fastify CRUD and Authentication project is a web application built using the Fastify framework in Node.js. It provides a RESTful API for managing resources with CRUD operations (Create, Read, Update, and Delete) and includes authentication to secure the endpoints. The project utilizes the following packages:

- **EJS**: EJS (Embedded JavaScript) is a templating engine for rendering dynamic HTML templates on the server-side.
- **Axios**: Axios is a popular HTTP client library for making asynchronous HTTP requests from Node.js or browser.
- **Tailwind CSS**: Tailwind CSS is a utility-first CSS framework that provides a set of pre-designed utility classes to style your web application easily.
- **Bcrypt**: Bcrypt is a password-hashing function library used for secure password storage.
- **Fastify**: Fastify is a fast and low-overhead web framework for Node.js.
- **MongoDB**: MongoDB is a NoSQL database used for storing and retrieving data in a flexible, scalable, and high-performance manner.
- **Mongoose**: Mongoose is an Object Data Modeling (ODM) library for MongoDB and provides a straightforward way to work with MongoDB in Node.js.

### Features

1. **CRUD Operations**: The project allows performing CRUD operations on resources, providing functionalities such as:

   - **Create**: Users can add new resources to the system by sending a POST request with the required data.
   - **Read**: Users can retrieve individual resources or a list of resources by sending a GET request to the corresponding endpoints.
   - **Update**: Users can update existing resources by sending a PUT or PATCH request with the updated data.
   - **Delete**: Users can delete resources by sending a DELETE request to the respective endpoint.

2. **Authentication**: The project includes authentication to secure the API endpoints and ensure that only authorized users can access them. It provides the following features:

   - User Registration: New users can create an account by providing their credentials.
   - User Login: Registered users can log in using their credentials to obtain an access token.
   - Token-based Authentication: The API endpoints are protected using token-based authentication. Users need to include their access token in the request headers to access the protected routes.
   - Access Control: The project implements access control mechanisms to restrict certain operations based on user roles or permissions.

3. **Data Validation**: The application enforces data validation to ensure the integrity of the resources. It validates incoming requests to ensure they contain the required fields and meet specific criteria.

4. **Error Handling**: The project includes proper error handling mechanisms to provide meaningful error messages and handle exceptions gracefully. It returns appropriate HTTP status codes and error responses for different scenarios.

5. **Database Integration**: The project integrates with a MongoDB database using Mongoose for storing and retrieving the resources. It utilizes Mongoose's schemas and models to define the data structure and perform database operations.

6. **Logging and Monitoring**: The application implements logging and monitoring mechanisms to track important events, debug issues, and monitor the system's health. It may utilize logging libraries and tools to collect and analyze logs.

7. **API Documentation**: The project includes documentation for the API endpoints, describing their purpose, input parameters, and expected responses. It may utilize tools like Swagger or Fastify-Swagger to generate API documentation automatically.

8. **Security Measures**: The project implements security measures to protect against common web vulnerabilities, such as input validation, data sanitization, and protection against common attacks like SQL injection and cross-site scripting (XSS).
