// lib/db.js
import { Pool } from 'pg';

const pool = new Pool({
  user: 'tenko',
  host: 'localhost',
  database: 'postgres',
  port: 5432,
});

export const query = (text, params) => pool.query(text, params);
