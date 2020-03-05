const express = require('express');
const app = express();
const PORT = 3000;

const path = require('path');

app.use('/', express.static(path.join(__dirname, 'public')));

app.post('/', (req, res) => {
  insertIntoDB(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));

////////
// Interacting with database
////////

const mysql = require('mysql');

var db = mysql.createConnection({
  host: "localhost",
  user: "student",
  password: "student",
  database: "checkouts"
});



var insertIntoDB = (obj) => {
  return new Promise((resolve, reject) => {
    db.connect((err) => {
      if (err) {
        reject(err);
      } else {
        db.query('', (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      }
    });
  });
};