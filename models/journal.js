import { pool } from '../db/index.js';

// get all journal
export async function getJournal() {
    const response = await pool.query('SELECT * FROM journal')
    return response.rows;
    
};

// get all journals by id
export async function getJournalById(id) {
    const response = await pool.query(`SELECT * FROM journal WHERE journal_id = $1 RETURNING *`, [id])
    return response.rows;  
};

// create journals 
export async function createJournal(journals) {
    const response = await pool.query(`INSERT INTO journal (journal_entry) VALUES ($1) RETURNING *`, [journals])
    return response.rows;    
}

// delete journals
export async function deleteJournalbyId(id) {
    const response = await pool.query(`DELETE FROM journal WHERE journal_id = $1 RETURNING *`, [id])
     return response.rows;
}

// update journals
export async function updateJournalById(journals, id) {
    const response = await pool.query(`UPDATE journal SET journal_entry = $1 WHERE journal_id = $2 RETURNING *`, [journals, id]);
    return response.rows;
};



