Got it! Let's update the README file with the correct directory structure and API endpoints based on the provided link.

---

# Crisis Management Frontend

This repository contains the frontend code for the Crisis Management application. The project is built using React, TypeScript, and Vite, and it integrates with a NestJS backend and PostgreSQL database.

## Table of Contents
- [Technologies Used](#technologies-used)
- [APIs](#apis)
- [Integration with PostgreSQL and NestJS Backend](#integration-with-postgresql-and-nestjs-backend)
- [Directory Structure](#directory-structure)
- [Routes](#routes)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A build tool that aims to provide a faster and leaner development experience for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.
- **ESLint**: A tool for identifying and fixing problems in JavaScript code.
- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **PostgreSQL**: A powerful, open-source object-relational database system.

## APIs
The frontend communicates with the backend through RESTful APIs. The following endpoints are available:

- **GET /api/crises**: Retrieve a list of all crises.
- **POST /api/crises**: Create a new crisis.
- **GET /api/crises/:id**: Retrieve details of a specific crisis.
- **PUT /api/crises/:id**: Update a specific crisis.
- **DELETE /api/crises/:id**: Delete a specific crisis.

## Integration with PostgreSQL and NestJS Backend
To integrate the frontend with the NestJS backend and PostgreSQL database, follow these steps:

1. **Set up the backend**: Ensure that the NestJS backend is running and connected to the PostgreSQL database. Refer to the backend repository for setup instructions.
2. **Configure environment variables**: Create a `.env` file in the root directory of the frontend project and add the following environment variables:
   ```
   REACT_APP_API_URL=http://localhost:3000/api
   ```
3. **Install dependencies**: Run `npm install` to install the required dependencies.
4. **Start the development server**: Run `npm start` to start the development server. The frontend will be available at `http://localhost:3000`.

## Directory Structure
The project directory structure is as follows:
```
crisis-management-frontend/
├── public/
│   ├── index.html
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── contexts/
│   ├── hooks/
│   ├── lib/
│   ├── styles/
│   ├── types/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
├── .gitignore
├── package.json
├── README.md
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
```

## Routes
The application has the following routes:
- **/**: Home page
- **/crises**: List of crises
- **/crises/:id**: Crisis details page
- **/create-crisis**: Create a new crisis

## Getting Started
To get started with the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone https://github.com/Crisis-Management/crisis-management-frontend.git
   ```
2. **Navigate to the project directory**:
   ```
   cd crisis-management-frontend
   ```
3. **Install dependencies**:
   ```
   npm install
   ```
4. **Start the development server**:
   ```
   npm run dev
   ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README file to better suit your project's needs!
