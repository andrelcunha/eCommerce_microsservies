# Auth API

## Description

The Auth API is a microservice responsible for user authentication and management in our Ecommerce Microservices Project. It is developed using Node.js TS and Fastify.

## Features

- **User Authentication**: Validates user credentials and authenticates the user.
- **User Registration**: Registers new users into the system, validating the input data and storing it securely.
- **Token Issuance**: Issues JWT (JSON Web Tokens) to authenticated users, ensuring secure access to other APIs.

## Tech Stack

- **Language**: TypeScript
- **Framework**: Fastify
- **Authentication**: JSON Web Tokens (JWT)
- **Database**: MySQL or PostgreSQL

## Installation and Setup

1. Clone the repository: `git clone https://github.com/yourusername/ecommerce-microservices-project.git`
2. Navigate to the Auth API directory: `cd auth-api`
3. Install dependencies: `npm install`
4. Set up your environment variables: `cp .env.example .env` (and fill out the necessary details)
5. Run the service: `npm start`

## API Endpoints

- `POST /register`: Registers a new user.
- `POST /login`: Authenticates a user and returns a JWT.
- `GET /user/:id`: Retrieves user information.

## Testing

This service includes unit tests and integration tests. Run `npm test` to execute them.

