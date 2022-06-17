const express = require('express');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.listen(8080, () => {
    console.log(`Listening on port 8080`)
});

app.get('/',(req,res) => res.status(200).send('Hello World'))