const fs = require("fs");
var valid = 0;

function readFile() {
  var array = fs.readFileSync("text.txt").toString().split("\r");
 
  for(let i = 0; i < array.length; i++){
    let min = parseInt(array[i].toString().substring(0, array[i].indexOf('-')));
    let max = parseInt(array[i].toString().substring(array[i].indexOf('-') + 1, array[i].indexOf(' ')));
    let char = array[i].toString().substring(array[i].toString().indexOf(' ') + 1, array[i].toString().indexOf(':'))
    let pass = array[i].toString().substring(array[i].toString().indexOf(':') + 2,array[i].length);
    
      if(pass.charAt(min - 1) === char && pass.charAt(max - 1) !== char || pass.charAt(min - 1) !== char && pass.charAt(max - 1) === char)
      {
        valid++;
      }
  }
  console.log(valid);
}

readFile();
