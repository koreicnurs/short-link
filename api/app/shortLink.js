const express = require('express');

const router = express.Router();
const {nanoid} = require('nanoid');
const Link = require("../models/Link");

router.get('/', async (req, res) => {
    try {
        const links = await Link.find();
        res.send(links);
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