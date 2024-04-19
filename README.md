# My Express App

This is a TypeScript Express Node web application.

## Project Structure

```
my-express-app
├── src
│   ├── app.ts
│   ├── controllers
│   │   └── index.ts
│   ├── routes
│   │   └── index.ts
│   └── types
│       └── index.ts
├── test
│   └── app.test.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Description

The project has the following files:

- `src/app.ts`: This file is the entry point of the application. It creates an instance of the express app and sets up middleware and routes.

- `src/controllers/index.ts`: This file exports a class `IndexController` which has a method `getIndex` that handles the root route of the application.

- `src/routes/index.ts`: This file exports a function `setRoutes` which sets up the routes for the application. It uses the `IndexController` to handle the root route.

- `src/types/index.ts`: This file exports interfaces `Request` and `Response` which extend the interfaces from the `express` library.

- `test/app.test.ts`: This file contains the tests for the application. It tests the functionality of the routes and controllers.

- `tsconfig.json`: This file is the configuration file for TypeScript. It specifies the compiler options and the files to include in the compilation.

- `package.json`: This file is the configuration file for npm. It lists the dependencies and scripts for the project.

## Installation

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the application.

## Testing

Run `npm test` to run the tests for the application.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.