import {getUsers, getUserById} from "../../controllers/userController";

export const getUserDTO = {
  type: "object",
  properties: {
    id: {type: "number"},
    name: {type: "string"},
    email: {type: "string"},
  },
};

export const createUserDTO = {
  type: "object",
  properties: {
    name: {type: "string"},
    email: {type: "string"},
    password: {type: "string"},
  },
};

export const getAllUsersOption = {
  schema: {
    response: {
      200: {
        type: "array",
        items: getUserDTO,
      },
    },
  },
  handler: getUsers,
};

export const getUserByIdOption = {
  schema: {
    params: {
      type: "object",
      properties: {
        id: {type: "number"},
      },
      required: ["id"],
    },
    response: {
      200: getUserDTO,
    },
  },
  handler: getUserById,
};

export const createUserOption = {
  schema: {
    body: {
      type: createUserDTO,
      required: ["name", "email", "password"],
      response: {
        201: {
          type: "string",
          description: "User created",
        },
      },
    },
  },
};
