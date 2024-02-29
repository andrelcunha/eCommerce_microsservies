# Ecommerce Microservices Project

This project is a distributed ecommerce system developed in Node.js TS and Fastify for the backend, and React.js for the frontend. The system is divided into several microservices, each with its own responsibilities and databases.

## Project Architecture Overview

### APIs

The system is composed of several APIs:

1. **Auth API**: Handles user authentication and management. It is responsible for login, registration, and token issuance, ensuring secure access to other APIs.
2. **Basket API**: Manages shopping cart functionality, allowing users to add, remove, and modify items in their cart. It integrates with the Ordering API for checkout.
3. **Client API**: Handles client-related operations, retrieving user profiles, preferences, and other client-specific data to ensure personalized experiences.
4. **Ordering API**: Deals with order processing, managing order creation, status updates, and fulfillment. It communicates with the Basket and Payment APIs.
5. **Payment API**: Responsible for payment processing, integrating with external payment gateways (e.g., Stripe, PayPal) to ensure secure and reliable transactions.

### Communication

APIs communicate via a message system (RabbitMQ), enabling asynchronous communication for decoupling services, scalability, and fault tolerance. Each API can publish and subscribe to relevant topics.

### Databases

Each API has its own database:

- MySQL or PostgreSQL for structured data (e.g., user profiles, orders).
- MongoDB for unstructured or semi-structured data (e.g., product descriptions, client preferences).
- Redis for in-memory caching (e.g., session management, frequently accessed data).

### API Gateway (BFF)

An API gateway is implemented to act as a single entry point for the frontend, handling routing, authentication, and cross-cutting concerns, simplifying frontend interactions with the backend.

### Authentication

JWT (JSON Web Tokens) are used for secure authentication, providing stateless tokens for user identity that are sent via cookies to the frontend, ensuring authorized access to APIs.

### Logging

The AWS SES (Simple Email Service) microservice is integrated to send email notifications for various events (e.g., user registration, order confirmations, password resets), monitor system health, errors, and exceptions, and enhance user engagement through personalized emails.

## Getting Started

TBD

## Contributing

TBD

## License

This project is licensed under the MIT License. See the LICENSE file for details.
