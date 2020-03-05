const express = require('express');
const app = express();
const PORT = 3000;

const path = require('path');

const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


app.use('/', express.static(path.join(__dirname, 'public')));

app.post('/', (req, res) => {
  console.log(req.body);
  res.send();

  // insertIntoDB(req.body)
  //   .then(() => {
  //     res.sendStatus(201);
  //   })
  //   .catch(() => {
  //     res.sendStatus(500);
  //   });
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

var sqlinsert = `INSERT INTO userdata () VALUES ();`

var sqlupdate = obj => {
  var keys = [];
  var values = [];
  for (var key in obj) {
    keys.push(key);
    values.push(obj[key]);
  }
  return `UPDATE INTO userdata (${keys.join()}) VALUES (${values.join()});`
}

var insertIntoDB = (obj) => {
  return new Promise((resolve, reject) => {
    db.connect((err) => {
      if (err) {
        reject(err);
      } else {
        db.query(sqlinsert, (err, result) => {
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