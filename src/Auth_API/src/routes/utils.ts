import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import {request} from "http";

export async function toolsRoutes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get("/", async (req: FastifyRequest, replay: FastifyReply) => {
    replay.send("ok");
  });

  fastify.get("/ping", async () => {
    return "pong";
  });
}
