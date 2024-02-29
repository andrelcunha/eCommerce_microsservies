import dotenv from "dotenv";
import path from "path";

const envParh = path.resolve(__dirname, "../../.env");

dotenv.config({
  path: envParh,
});

export const envVars = {
  HOST: process.env.HOST,
  PORT: process.env.PORT,
};
