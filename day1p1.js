const fs = require("fs");
var array = fs.readFileSync("text.txt").toString().split("\n");

  for (let i = 0; i < array.length; i++) {
    let one = parseInt(array[i]);
    for (let x = 0; x < array.length; x++) {
      let two = parseInt(array[x]);
      if(one + two === 2020) {
        console.log(one + '*' + two + '=' +one*two)
      }
    }
  }