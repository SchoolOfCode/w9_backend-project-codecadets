import express from 'express';
const router = express.Router();

import {
	getJournal,
	createJournal,
	deleteJournalbyId
} from "../models/journal.js"

// router get all journals
router.get('/', async function (req, res) {
	const result = await getJournal();
	res.json({
		success: true,
		data: result
	});
});


// router creates Journal  (adds to the database)
router.post('/', async function (req, res) {
<<<<<<< HEAD
	const newJournal = req.body;
	const result = await createJournal(newJournal);
	console.log(result)
=======
	const newJournal = req.body.journal_entry;
	const result = await createJournal(newJournal);
>>>>>>> 238fd1e86daaa8a9a0bb71405b7dc9c4e6bba41b
	res.json({ success: true, payload: result });
});


// router deletes journal by ID

router.delete('/:id', async function (req, res) {
	const id = Number(req.params.id);
	const result = await deleteJournalbyId(id);
	res.json({ success: true, payload: result });
});




export default router;