const express = require('express');
const router = express.Router();
const {nanoid} = require('nanoid');
const Link = require("../models/Link");

router.get('/:shortUrl', async (req, res) => {
    try {
        const links = await Link.findOne({shortUrl: req.params.shortUrl});
        if(links) {
            res.status(301).redirect(links.originalUrl);
        } else {
            res.status(400).send({error: 'didnt find shortUrl'});
        }
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
        shortUrl: nanoid(6),
    };

    const newLink = new Link(link);
    await newLink.save();

    res.send(link);
});

module.exports = router;