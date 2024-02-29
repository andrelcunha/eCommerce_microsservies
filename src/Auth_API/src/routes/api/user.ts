import {FastifyInstance, FastifyPluginOptions} from "fastify";
import {
  getAllUsersOption,
  getUserByIdOption,
  createUserOption,
} from "./userOpitions";

export async function userRoutes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get("/users", getAllUsersOption);

  fastify.get("/users/:id", getUserByIdOption);

  //fastify.get("/users", createUserOption);
}
