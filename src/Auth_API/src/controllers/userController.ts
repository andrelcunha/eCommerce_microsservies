import {FastifyReply, FastifyRequest} from "fastify";

const users = [
  {id: 1, name: "John", email: "john@test.com"},
  {id: 2, name: "Jane", email: "john@test.com"},
  {id: 3, name: "Joe", email: "john@test.com"},
  {id: 4, name: "Jill", email: "john@test.com"},
  {id: 5, name: "Jack", email: "john@test.com"},
  {id: 6, name: "Jenny", email: "john@test.com"},
  {id: 7, name: "Jeane", email: "john@test.com"},
];

export const getUsers = (req: FastifyRequest, reply: FastifyReply): void => {
  reply.send(users);
};

export const getUserById = (req: FastifyRequest, replay: FastifyReply) => {
  const {id} = req.params as {id: number};
  if (!id) {
    replay.status(400).send("Missing id");
    return;
  }
  const user = users.find((user) => user.id === id);
  if (!user) {
    replay.status(404).send("User not found");
    return;
  }
  replay.send(user);
};
