const fs = require("fs");
var array = fs.readFileSync("text.txt").toString().split("\n");

  for (let i = 0; i < array.length; i++) {
    let one = parseInt(array[i]);
    for (let x = 0; x < array.length; x++) {
        let two = parseInt(array[x]);
        for(let y = 0; y < array.length; y++) {
            let three = parseInt(array[y]);
            if(one + two + three === 2020) {
                console.log(one + '*' + two + '*' + three  + '=' +one*two*three)
              }
        }
    }
  }