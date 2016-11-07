var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function(err, data) {
    if( err ){
        console.error("Uso: node cesar.js mi_archivo.txt");
        console.log(err);
    }
    else{
        desencriptar(data)
    }
});

SALTO = 10;

function desencriptar(texto){
  var alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var texto_descifrado = "";
  for(var i = 0; i < texto.length; i++){
    var index = alfabeto.indexOf(texto[i]);
    if(index != -1){
      texto_descifrado += alfabeto[index - SALTO];
    }else if(texto[i] == " "){
      texto_descifrado += " ";
    }
  }

  console.log(texto_descifrado);
}
