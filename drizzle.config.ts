import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  schema: './src/schema.ts',
  driver: 'mysql2',
  dbCredentials: {
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_PASSWORD as string,
    database: 'nesdb',
  },
  verbose: true,
  strict: true,
});
