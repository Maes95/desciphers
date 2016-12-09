var fs = require('fs');

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
      trasponer(texto, i)
    }
}

function trasponer(texto, n){
  var corte = texto.length / n;
  var j = 0;
  console.log("WITH N = "+n);
  console.log("__________________________________________");
  while(j < texto.length){
    console.log(texto.substr(j,corte).slice(0,30));
    j = j + corte;
  }
  console.log("__________________________________________");
}

module.exports = trasponer;
