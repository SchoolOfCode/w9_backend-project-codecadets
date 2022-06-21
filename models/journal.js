import { pool } from '../db/index.js';
import { journal } from '../libs/journal-data.js';

// get all movies 
export async function getJournal() {
    const response = await pool.query('SELECT * FROM movies')
    // console.log(response);
    return response.rows;
    
};


// create journals - might have to change to (movies)
export function createJournal(journals) {
    journal.push(journals);
    return journal[journal.length - 1]; // Why is there - 1 and what is being returned?
}