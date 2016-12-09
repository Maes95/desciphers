var fs = require('fs');
const Cesar = require("../api.js").Cesar;
var alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const ARREGLO = 10;

fs.readFile(process.argv[2], 'utf8', function(err, data) {
    if( err ){
        console.error("Uso: node monoalph_trans.js mi_archivo.txt");
        console.log(err);
    }
    else{
      procesar(data);
    }
});

function procesar(texto){
  var posibles = [];
  for(var i = 0; i < alfabeto.length; i++){
    posibles.push({salto: i, ristra: Cesar(texto, i)});
  }

  // Contamos con que tendrá varios caracteres raros (comas, puntos, etc)
  posibles = posibles.filter((x) => x.ristra.length >= (texto.length - ARREGLO));

  for(i of posibles){
    console.log("SALTO->"+i.salto+"\nRISTRA->"+i.ristra.slice(0,30));
  }
}
