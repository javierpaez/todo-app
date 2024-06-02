## Telus Challenge - Micro-Frontend Todo App (React & Webpack)

With this project I implemented a micro-frontend Todo application built with React and Webpack. It demonstrates the principles of micro-frontend architecture, where a larger application is composed of independent, single-responsibility frontend modules. I used webpack for that. And demostrated the use of that MFE with a host application.

### Features of TODO MFE

- Add, edit, and delete todo items
- Filter todo items by status (All, Active, Completed)
- Local storage persistence for todo items

### Automatic Installation and develop Running

With the following commands you can get install and execute the host and the MFE applications with simple steps:
1. Clone this repository:

   ```bash
   git clone https://github.com/javierpaez/todo-app.git
   ```

2. Install and run host and MFE with one command
   You can run the app with one command just running
   ```bash
   npm run apps:run
   ```
   This will install and run both applications in different process

OR you can do it separately:

### Manual Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/javierpaez/todo-app.git
   ```

2. Install dependencies:
   You can run the applications separately
   Host app

   ```bash
   cd host
   npm install
   ```

   ```bash
   cd todo-list
   npm install
   ```

### Manual Usage

1. Start the development server for both applications:

   ```bash
   npm start
   ```

2. Open http://localhost:8080 in your browser.
3. The route http://localhost:8080/todo is the todo application as you see the app hosted the MFE and the header is shared for all the MFEs.

### Development

This project uses Webpack for module bundling and development server. You can modify the configuration in `webpack.config.js`.

### Testing

Unit tests are written using react testing library and cover 100% the MFE application components and logic. Run the tests with:

```bash
npm test
```

and for running coverage run:

```bash
npm test:coverage
```

### Deployment

The micro-frontend application can be deployed as a separate bundle and integrated into a larger hosting environment that supports micro-frontend architecture. Webpack can be configured to generate production-ready builds suitable for deployment.

1. You can alse see the application executed with the files built using:
   ```bash
   npm run apps:build:start
   ```
2. Open http://localhost:8080 in your browser.

### Technologies

- React
- Webpack
- Testing Library React
- Tailwind (for styling)
