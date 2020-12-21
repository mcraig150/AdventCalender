const fs = require("fs");
var valid = 0;

function readFile() {
  var array = fs.readFileSync("text.txt").toString().split("\r");
 
  for(let i = 0; i < array.length; i++){
    let min = parseInt(array[i].toString().substring(0, array[i].indexOf('-')));
    let max = parseInt(array[i].toString().substring(array[i].indexOf('-') + 1, array[i].indexOf(' ')));
    let char = array[i].toString().substring(array[i].toString().indexOf(' ') + 1, array[i].toString().indexOf(':'))
    let pass = array[i].toString().substring(array[i].toString().indexOf(':') + 2,array[i].length);
    let count = 0;
    for(let x = 0; x < pass.length; x++) {
      
      if(pass.charAt(x) === char)
      {
        count++;
      }
    }

    if(count >= min && count <= max) {
      valid++;
    }
    
  }
  console.log(valid);
}

readFile();