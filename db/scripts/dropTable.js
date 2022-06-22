import { pool } from '../index.js';

const sqlString = `DROP TABLE IF EXISTS journal;`;
<<<<<<< HEAD

=======
>>>>>>> 238fd1e86daaa8a9a0bb71405b7dc9c4e6bba41b
async function createJournalTable() {
    const res = await pool.query(sqlString);
    console.log(res.command, "dropped journal table");
}
<<<<<<< HEAD

=======
>>>>>>> 238fd1e86daaa8a9a0bb71405b7dc9c4e6bba41b
createJournalTable();