const express = require('express');
const app = express();
const PORT = 3000;

const path = require('path');
const bodyParser = require('body-parser');

const multer = require('multer');
const upload = multer({dest: 'uploads/'});

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static(path.join(__dirname, 'client')));


app.use(bodyParser.json());

app.post('/generate', (req, res) => {
  console.log('Received POST request.');
  res.send(`<html>
  <head>
    <title>Jeremy's CSV</title>
  </head>

  <body>
    <h3> Jeremy's CSV Report Generator</h3>
    <form action="http://127.0.0.1:3000/generate" method="POST">
      <label for="input">Ask, and you shall reCSV.</label>
      <br><br>
      <textarea id="input" name="input" cols="100" rows="10" placeholder="Paste your JSON string here."></textarea>
      <br>
      <input type="submit" value="Convert to CSV">
    </form>

    <h4>Generated CSV:</h4>
    <p>${generateCSV(req.body.input)}</p>

  </body>
</html>`);
});

console.log('======Samantha?=====',upload);

app.post('/genfromfile', upload.single('fileinput'), (req, res) => {
  console.log(req.file);
  res.send('WooHOO');
});

app.listen(PORT, () => console.log(`Jeremy's CSV Report Generator listening on port ${PORT}.`));


//// CSV Generator function
// Takes a JSON string and returns a CSV string

var generateCSV = string => {
  var jsonObj = JSON.parse(string);

  // Generate first row
  var keys = Object.keys(jsonObj)
  keys.pop();
  var csv = '';
  csv += keys;

  // Helper function, takes the overall object and recurses through it, adding to a queue to objects to convert. Then iterates over the queue, adding to a CSV-style string.
  var objQueue = [jsonObj];

  var queueAdder = childrenArray => {
    for (var child of childrenArray) {
      objQueue.push(child);
      queueAdder(child.children);
    }
  };

  queueAdder(jsonObj.children);

  while (objQueue.length) {
    var currObj = objQueue.shift();
    var currValues = Object.values(currObj);
    currValues.pop();
    csv += '<br>' + currValues;
  }

  return csv;
};