import pg from 'pg';

export const pool = new pg.Pool({
	user: process.env.PGUSER,
	host: process.env.PGHOST,
	database: process.env.PGDATABASE,
	password: process.env.PGPASSWORD,
	port: process.env.PGPORT,
	ssl: { rejectUnauthorized: false },
});

const response = await pool.query('SELECT NOW()');

console.log(response)