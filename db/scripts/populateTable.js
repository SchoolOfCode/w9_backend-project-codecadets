import { pool } from "../index.js";
import { journal } from "../../libs/journal-data.js";

async function populateJournalTable() {
    for (let i=0; i < journal.length; i++) {
        const res = await pool.query(
            `INSERT INTO journal (journal_entry) VALUES ($1);`,
            [journal[i].journal_entry]
        );
    } console.log("JOURNAL ADDED")
}

populateJournalTable();