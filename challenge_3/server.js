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

var insertIntoDB = (obj) => {

};