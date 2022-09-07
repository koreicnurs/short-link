const express = require('express');

const router = express.Router();
const {nanoid} = require('nanoid');
const mongoDb = require('../mongoDb');

router.get('/', async (req, res) => {
    try {
        const db = await mongoDb.getDb();
        const link = await db.collection('links').find();
        res.send(link);
    } catch {
        res.sendStatus(500);
    }
});

router.post('/',  async (req, res) => {
    if (!req.body.message || !req.body.news_id) {
        return res.status(400).send({error: 'Something are missing'});
    }

    const comment = {
        author: req.body.author,
        message: req.body.message,
        news_id: req.body.news_id
    };

    res.send({
        ...comment,
    });
});

module.exports = router;