const fs = require("fs");

var x = 0;
var count = 0;

function readFile() {
  var array = fs.readFileSync("text.txt").toString().split("\n");

  for (let i = 0; i < array.length; i+=2) {

    if (array[i].charAt(x % 31) === "#") {
      count++;
    }
    x += 1;
  }
  console.log(count);
}

readFile();
