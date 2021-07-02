const express = require('express');
const bodyParse = require('body-parser');
const cors = require("cors");
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

const db = mysql.createPool({
    host: 'localhost',
    user: 'Carl',
    password: '123456789',
    database: 'clues'
});

/* APPLY THE MIDDLEWARES! */
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

function randomClueNumber() {
    return Math.floor(Math.random() * 350000);
}

app.get("/api/getSingleClue", (req, res) => {
    
    const clueQuery = `SELECT * FROM clue_data WHERE id=${randomClueNumber()}`;
    console.log(clueQuery);
    
    db.query(clueQuery, (err, result) => {

        if(err) throw err;

        console.log(result);
        res.send(result);
    })
    
})

app.listen(3001, () => {
    console.log("Running on Port 3001");
});