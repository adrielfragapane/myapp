const express = require('express');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.listen(3000, () => {
    console.log(`Listening on port 3000`)
});

app.get('/',(req,res) => res.status(200).send('Hello World'))