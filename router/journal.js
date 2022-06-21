import express from 'express';
const router = express.Router();

import {
	getJournal,
	createJournal
} from "../models/journal.js"

// router get all journals
router.get('/', async function (req, res) {
	const result = await getJournal();
	res.json({
		success: true,
		payload: result,
	});
});


// router creates Journal  (adds to the database)
router.post('/', function (req, res) {
	const newJournal = req.body;
	const result = createJournal(newJournal);
	console.log(result)
	res.json({ success: true, payload: result });
});

export default router;