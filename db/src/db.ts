import { drizzle } from 'drizzle-orm/postgres-js';
import { Pool } from 'pg';
import * as schema from './schema';
import * as dotenv from 'dotenv';

dotenv.config({ path: "../../.env" });

// Untuk pengembangan lokal
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool, { schema });
