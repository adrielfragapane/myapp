const express = require('express');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require('./database')

app.listen(3000, () => {
    console.log(`Listening on port 4000`);
});

app.get('/',(req,res) => res.status(200).send('Hello World 1'));