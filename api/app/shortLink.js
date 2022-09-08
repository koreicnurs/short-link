const express = require('express');
const router = express.Router();
const {nanoid, customAlphabet} = require('nanoid');
const Link = require("../models/Link");

router.get('/', async (req, res) => {
    try {
        const links = await Link.find();
        res.send(links);
    } catch {
        res.sendStatus(500);
    }
});

router.post('/', async (req, res) => {
    if (!req.body.originalUrl) {
        return res.status(400).send({error: 'Something are missing'});
    }

    const link = {
        originalUrl: req.body.originalUrl,
        shortUrl: nanoid(),
    };

    const newLink = new Link(link);
    await newLink.save();

    res.send(link);
});

module.exports = router;