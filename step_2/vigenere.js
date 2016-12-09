var fs = require('fs');
const Vigenere = require("../api.js").Vigenere;

var clave = process.argv[2];

fs.readFile(process.argv[3], 'utf8', function(err, data) {
    if( err ){
      console.error("Uso: node vigenere.js CLAVE entrada2.txt");
      console.log(err);
    }
    else{
        Vigenere(data, clave)
    }
});
