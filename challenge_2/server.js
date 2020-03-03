const express = require('express');
const app = express();
const PORT = 3000;

const path = require('path');
const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static(path.join(__dirname, 'client')));


app.use(bodyParser.json());

app.post('/generate', (req, res) => {
  console.log('Received POST request.');
  console.log(req.body.input);
  res.send(`<p>${generateCSV(req.body.input)}</p>`);
});

app.listen(PORT, () => console.log(`Jeremy's CSV Report Generator listening on port ${PORT}.`));


//// CSV Generator function
// Takes a JSON string and returns a CSV string

var generateCSV = string => {
  var jsonObj = JSON.parse(string);
  var csv = '';
  csv += Object.keys(jsonObj);
  return csv;
};