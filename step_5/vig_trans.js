var fs = require('fs');
const Trasponedor2 = require("../api.js").Trasponedor2;
const Original = require("../api.js").Original;

fs.readFile(process.argv[2], 'utf8', function(err, data) {
    if( err ){
        console.error("Uso: node vig_trans.js mi_archivo.txt");
        console.log(err);
    }
    else{
      procesar(data);
    }
});

const TOPE = 10;
const AJUSTE = 20;

function procesar(texto){

  var texto_cifrado_bin = toBinary(texto);
  console.log("Ristra texto cifrado: "+texto_cifrado_bin.slice(0,AJUSTE));

  for(var i = 1; i < TOPE; i++){
    var ristras = Trasponedor2(Original, i);
    for(var ristra of ristras){
      var ristra_descifrada_bin = toBinary(ristra);
      if(ristra_descifrada_bin.slice(0,AJUSTE) == texto_cifrado_bin.slice(0,AJUSTE)){
        console.log("La ristra cifrada corresponde a la ristra original: \n"+ristra.slice(0,AJUSTE)+"\nNúmero de columnas de transposición es: "+i);
      }
    }
  }

}

function toBinary(texto){
  var binario = "";
  for(var i = 0; i < texto.length; i++){
    if(texto[i].match(/[a-z0-9]/i) != null){
      binario += 1;
    }else{
      binario += 0;
    }
  }
  return binario;
}
