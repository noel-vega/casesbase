import dotenv from "dotenv";
import { Config, defineConfig } from "drizzle-kit";

dotenv.config({ path: ".env.local" });

// console.log(process.env.MYSQL_SSL_CA);
export default defineConfig({
  schema: "./src/drizzle/schema/*",
  dialect: "mysql",
  dbCredentials: {
    database: "casesbase",
    host: process.env.DATABASE_HOST!,
    user: process.env.DATABASE_USERNAME!,
    password: process.env.DATABASE_PASSWORD!,
    ssl: {
      rejectUnauthorized: false,
    },
  },
  verbose: true,
  strict: true,
});
