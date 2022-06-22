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
    const response = await pool.query(`INSERT INTO journal (journal_entry) VALUES ($1) RETURNING *`, [journals])
    return response.rows;    
}




export async function deleteJournalbyId(id) {
    const response = await pool.query(`DELETE FROM journal WHERE journal_id = $1 RETURNING *`, [id])
     return response.rows;
}


export async function updateJournalById(journals, id) {
    const response = await pool.query(`UPDATE journal SET journal_entry = $1 WHERE journal_id = $2 RETURNING *`, [journals, id]);
    return response.rows;
};

console.log(await updateJournalById("hello", 2))

// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;


