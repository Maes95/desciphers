var fs = require('fs');
const Trasponedor = require("../api.js").Trasponedor;

fs.readFile(process.argv[2], 'utf8', function(err, data) {
    if( err ){
        console.error("Uso: node transposition.js mi_archivo.txt");
        console.log(err);
    }
    else{
      procesar(data);
    }
});

const TOPE = 10;

function procesar(texto){
    for(var i = 1; i < TOPE; i++){
      var cadenas = Trasponedor(texto, i);
      console.log("WITH N = "+i);
      console.log("__________________________________________");
      for(var j = 0; j < i; j++){
        console.log(cadenas[j].slice(0,30));
      }
      console.log("__________________________________________");
    }
}
