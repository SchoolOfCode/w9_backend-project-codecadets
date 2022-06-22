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
    // journal.push(journals);
    return response.rows;
    // return journal[journal.length - 1]; // Why is there - 1 and what is being returned?
    
}




export async function deleteJournalbyId(id) {
    const response = await pool.query(`DELETE FROM journal WHERE journal_id = $1 RETURNING *`, [id])
    // const foundIndex = journal.findIndex( function(journals) {
    //     return journals.id === id;
    //  });

    //  const item = journal[foundIndex];
    //  journal.splice(foundIndex, 1);
    //  return item;
     return response.rows;
}

console.log(await deleteJournalbyId(2))