import dotenv from "dotenv";

dotenv.config({ quiet: true });

const DATABASE_URL = process.env.DATABASE_URL;
const PORT = process.env.PORT;
const GOOGLE_SECRET_ID = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CALLBACK_URI = process.env.GOOGLE_CALLBACK_URL;
const JWT_SECRET = process.env.JWT_SECRET;
const NODE = process.env.NODE;
const CLIENT_URL = process.env.CLIENT_URL;

export {
  DATABASE_URL,
  PORT,
  NODE,
  CLIENT_URL,
  GOOGLE_CALLBACK_URI,
  GOOGLE_CLIENT_ID,
  GOOGLE_SECRET_ID,
  JWT_SECRET,
};
