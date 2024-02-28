import Fastify from "fastify";
import {toolsRoutes} from "./routes/utils";
import {config} from "./utils/config";

const app = Fastify({logger: true});

const host = config.HOST || "localhost";
const port = config.PORT ? +config.PORT : 3000;

/* Route */
app.register(toolsRoutes);

app.listen({port, host}, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
});
