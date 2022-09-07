const express = require('express');
const mongoDb = require('./mongoDb');
const cors = require('cors');

const links = require('./app/shortLink');

const app = express();
const port = 8000;

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.use('/links', links);

const run = async () => {
    await mongoDb.connect();

    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });

    process.on('exit', () => {
        mongoDb.disconnect();
        console.log('MongoDb disconnected');
    });
};

run().catch(e => console.log(e));

