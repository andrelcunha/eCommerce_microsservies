import Fastify from "fastify";
import {toolsRoutes} from "./routes/utils";
import {envVars} from "./utils/envVarsConfig";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import {swaggerOptions, swaggerUiOptions} from "./utils/swaggerOptions";
import {userRoutes} from "./routes/api/user";
import cors from "@fastify/cors";

const app = Fastify({logger: true});

const host = envVars.HOST || "localhost";
const port = envVars.PORT ? +envVars.PORT : 3000;

app.register(fastifySwagger, swaggerOptions);
app.register(fastifySwaggerUi, swaggerUiOptions);
app.register(cors);

app.register(toolsRoutes);
app.register(userRoutes);

app.listen({port, host}, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
});
