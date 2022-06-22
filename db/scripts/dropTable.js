import { pool } from '../index.js';

const sqlString = `DROP TABLE IF EXISTS journal;`;

async function createJournalTable() {
    const res = await pool.query(sqlString);
    console.log(res.command, "dropped journal table");
}

createJournalTable();