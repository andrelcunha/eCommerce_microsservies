import {envVars} from "./envVarsConfig";

const host = envVars.HOST || "localhost";
const port = envVars.PORT ? +envVars.PORT : 3000;

export const swaggerOptions = {
  swagger: {
    info: {
      title: "Auth API",
      description: "testing the fastify swagger api",
      version: "0.0.1",
    },
    // securityDefinitions: {
    //   apiKey: {
    //     type: "apiKey",
    //     name: "apiKey",
    //     in: "header",
    //   },
    // },
    host: `${host}:${port}`,
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    //tags: [{ name: "Default", description: "Default" }],
  },
  hideUntagged: false,
  exposeRoute: true,
};

export const swaggerUiOptions = {
  routePrefix: "/docs",
  exposeRoute: true,
};
