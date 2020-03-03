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
  res.send(`<p>${generateCSV(req.body.input)}</p>`);
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