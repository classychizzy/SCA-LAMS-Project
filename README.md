# SCA-LAMS-PROJECT
- a library asset management tool a project for members of the backend channel at She codes Africa (SCA).
## team mates
- Classychizzy
- ifeoma
- oluwadolamipo
## app structure
- ` app.js` serves as the entry point for the application. it defines the express server and connects it to MongoDB using mongoose. it requires the routes and models used in the application. Sockets and session are defined here to ensure communication between the client and server.
- `config.js` contains the configuration for passport. is a central location environment variables/config.
- `models,js` contains all the mongoose schema  definition for the application.
- `routes.js` contains all the routes definitions for our API

## Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [express-jwt](https://github.com/auth0/express-jwt) - Middleware for validating JWTs for authentication
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - For generating JWTs used by authentication
- [mongoose](https://github.com/Automattic/mongoose) - For modeling and mapping MongoDB data to javascript 
- [mongoose-unique-validator](https://github.com/blakehaswell/mongoose-unique-validator) - For handling unique validation errors in Mongoose. Mongoose only handles validation at the document level, so a unique index across a collection will throw an exception at the driver level. The `mongoose-unique-validator` plugin helps us by formatting the error like a normal mongoose `ValidationError`.
- [passport](https://github.com/jaredhanson/passport) - For handling user authentication