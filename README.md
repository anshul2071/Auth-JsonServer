# uTalk Application

A simple web-based user authentication system with registration and login functionality, built with Vite and JSON Server.

## Overview

uTalk is a lightweight application demonstrating basic user authentication. It features a clean, responsive UI and uses a JSON-based backend for user data storage. The application is built using Vite as the frontend build tool, providing a fast development experience with Vanilla JS.

## Features

- User registration with field validation
- User login with credential verification
- Responsive design for mobile and desktop
- Form toggling between signup and login
- Session persistence using localStorage
- Simple navigation bar for authenticated users

## Project Structure

```
uTalk/
├── index.html            # Main HTML structure
├── src/
│   ├── index.css         # Main stylesheet
│   ├── main.js           # Application entry point
│   ├── components/
│   │   ├── login.js      # Login functionality
│   │   ├── register.js   # Registration functionality
│   │   ├── navbar.js     # Navigation bar component
│   │   └── toggleform.js # Form display toggle
├── backend/
│   └── db.json           # User database
└── package.json          # Project dependencies and scripts
```

## Technical Details

### Frontend Architecture

The frontend follows a modular architecture with ES6 modules for organizing functionality:

1. **Component-based Structure**: Each feature (login, registration, navigation) is isolated in its own module.
2. **Event-driven Design**: User interactions trigger events that are handled by specific functions.
3. **State Management**: User authentication state is managed using the browser's localStorage API.
4. **Form Validation**: Regex patterns are used to enforce email and password requirements.

### Vite as a Build Tool

[Vite](https://vitejs.dev/) is a modern frontend build tool offering:

- **Fast Startup**: Uses native ES modules to avoid bundling during development.
- **Hot Module Replacement (HMR)**: Updates modules in the browser without full page refreshes.
- **Optimized Builds**: Creates highly optimized production builds with automatic code-splitting.
- **CSS Processing**: Handles CSS imports directly in JavaScript files.
- **Development Server**: Includes a fast development server with proxy capabilities.

### Backend Implementation

The backend uses JSON Server, a full fake REST API with zero coding:

- **RESTful API**: Provides standard GET, POST, PUT, DELETE endpoints.
- **JSON Storage**: Uses a simple JSON file as a database.
- **Auto-generated Routes**: Automatically creates routes based on the JSON structure.
- **Low-overhead**: Perfect for prototyping and development.

## Setup and Installation

### 1. Clone the repository
```sh
git clone https://github.com/anshul2071/uTalk.git
```

### 2. Install dependencies
```sh
npm create vite@latest my-project -- --template vanilla
cd my-project
npm install
```

### 3. Install JSON Server
```sh
npm install -g json-server
```

### 4. Start the frontend development server
```sh
npm run dev
```
This starts the Vite development server, typically at http://localhost:5173.

### 5. Start the backend server (in a separate terminal)
```sh
json-server --watch backend/db.json --port 3000
```
This starts JSON Server, typically at http://localhost:3000.

## Running Scripts

The project includes the following npm scripts in `package.json`:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "backend": "json-server --watch backend/db.json"
}
```

To run the backend server, use:
```sh
npm run backend
```

## Form Validation

The application includes validation for:
- **Email format**: Ensures a valid email structure using regex.
  ```js
  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  ```
- **Password strength**: Minimum 8 characters, at least one uppercase letter, and one number.
  ```js
  /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/
  ```
- **Password confirmation matching**

## Authentication Flow

1. **User Registration**
   - Form data is validated on the client-side.
   - If valid, data is sent via a `POST` request to the JSON server.

2. **User Login**
   - Application fetches all users from the server.
   - Credentials are compared against stored user data.

3. **On Successful Login**
   - User state is stored in localStorage (`isLoggedIn` flag and user data).
   - UI updates to show the authenticated state.
   - Navigation bar appears with user-specific options.

4. **On Logout**
   - Session data is cleared from localStorage.
   - UI reverts to the unauthenticated state.

## Known Issues

- Redirect after login points to `navbar.js` instead of a proper page.
- No proper error handling for server connection issues.
- Passwords are stored in plain text (not secure for production).
- No token-based authentication system.
- Fetching all users for authentication is inefficient and insecure.

## License

This project is open-source and available under the MIT License.

---

This README provides all necessary information for setting up and running the **uTalk** application, making it easy for contributors and users to understand the project's structure and functionality.

