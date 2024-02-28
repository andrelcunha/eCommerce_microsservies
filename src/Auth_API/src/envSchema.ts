const schema = {
  type: "object",
  required: ["HOST", "PORT"],
  properties: {
    HOST: {
      type: "string",
      default: "0.0.0.0",
    },
    PORT: {
      type: "string",
      default: 3000,
    },
  },
};

export default schema;
