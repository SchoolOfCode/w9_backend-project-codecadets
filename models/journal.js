import { pool } from '../db/index.js';
import { journal } from '../libs/journal-data.js';

// get all journal
export async function getJournal() {
    const response = await pool.query('SELECT * FROM journal')
    // console.log(response);
    return response.rows;
    
};

// console.log(await getJournal())


// create journals - might have to change to (movies)
export async function createJournal(journals) {
    const response = await pool.query(`INSERT INTO journal (journal_entry) VALUES ('Hello') RETURNING *")
    // journal.push(journals);
    return response.rows;
    // return journal[journal.length - 1]; // Why is there - 1 and what is being returned?
    
}

console.log(await createJournal())