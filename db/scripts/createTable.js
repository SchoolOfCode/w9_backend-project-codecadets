import { pool } from '../index.js';

const sqlString = `CREATE TABLE IF NOT EXISTS journal (journal_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, journal_entry TEXT );`;

async function createJournalTable(params) {
	const res = await pool.query(sqlString, params);
	console.log('ITS WORKING :)');
}

createJournalTable();