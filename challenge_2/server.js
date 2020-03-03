const express = require('express');
const app = express();
const PORT = 3000;

const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname);
  }
});
var upload = multer({ storage: storage });




app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, 'client')));

app.listen(PORT, () => console.log(`Jeremy's CSV Report Generator listening on port ${PORT}.`));


//////////////////////
//// ROUTER methods
//////////////////////

/// OLD CODE from "convert text input" functionality
// app.post('/', (req, res) => {
//   res.send(generateCSV(req.body.input));
// });

app.post('/', upload.single('fileinput'), (req, res) => {
  fs.readFile(path.join(__dirname, 'uploads/fileinput'), 'utf8', (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      fs.writeFile(path.join(__dirname, 'client/yourfile.csv'), fileMaker(generateCSV(data)), (err) => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.send(generateCSV(data));
        }
      });
    }
  });
});

////////////////////
//// CSV Generator helper function
// Takes a JSON string and returns a CSV string
////////////////////

var generateCSV = string => {
  if (string[string.length - 1] === ';') {
    string = string.slice(0, string.length - 1);
  }
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


////////////////////
//// CSV Filemaker helper function
// Takes a CSV string (in HTML format) and changes it to regular CSV file
////////////////////

var fileMaker = string => {
  return string.split('<br>').join('\n');
};