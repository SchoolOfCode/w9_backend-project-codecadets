import express from 'express';
const router = express.Router();

import {
	getJournal,
	createJournal,
	deleteJournalbyId,
	updateJournalById,
	getJournalById
} from "../models/journal.js"

// router get all journals
router.get('/', async function (req, res) {
	const result = await getJournal();
	res.json({
		success: true,
		data: result
	});
});

// router get journals by id
router.get('/:id', async function (req, res) {
	const id = Number(req.params.id);
	const journal = await getJournalById(id);
	res.json({ success: true, payload: journal });
});

// router creates journal (adds to the database)
router.post('/', async function (req, res) {
	const newJournal = req.body.journal_entry;
	const result = await createJournal(newJournal);
	res.json({ success: true, payload: result });
});


// router deletes journal by ID
router.delete('/:id', async function (req, res) {
	const id = Number(req.params.id);
	const result = await deleteJournalbyId(id);
	res.json({ success: true, payload: result });
});

// router updates journal by ID
router.put('/:id', async function (req, res) {
    const id = Number(req.params.id);
    const data = req.body;
    const result = await updateJournalById(id, data);
    res.json({ success: true, payload: result });
});

export default router;