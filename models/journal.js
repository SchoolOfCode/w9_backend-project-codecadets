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
<<<<<<< HEAD
    const response = await pool.query(`INSERT INTO journal (journal_entry) VALUES ('Hello') RETURNING *")
=======
    const response = await pool.query(`INSERT INTO journal (journal_entry) VALUES ($1) RETURNING *`, [journals])
>>>>>>> 238fd1e86daaa8a9a0bb71405b7dc9c4e6bba41b
    // journal.push(journals);
    return response.rows;
    // return journal[journal.length - 1]; // Why is there - 1 and what is being returned?
    
}

console.log(await createJournal())


export async function deleteJournalbyId(id) {
    const response = await pool.query(`DELETE FROM journal (journal_entry) WHERE id = 1 RETURNING *`)
    // const foundIndex = journal.findIndex( function(journals) {
    //     return journals.id === id;
    //  });

    //  const item = journal[foundIndex];
    //  journal.splice(foundIndex, 1);
    //  return item;
     return response.rows;
}