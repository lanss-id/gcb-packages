import { drizzle } from 'drizzle-orm/postgres-js';
import { Pool } from 'pg';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import * as dotenv from 'dotenv';

dotenv.config({ path: "../../../.env" });

const runMigration = async () => {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined');
  }

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  const db = drizzle(pool);

  console.log('Running migrations...');

  await migrate(db, { migrationsFolder: 'src/drizzle' });

  console.log('Migrations completed!');

  await pool.end();
};

runMigration().catch((err) => {
  console.error('Migration failed!', err);
  process.exit(1);
});
