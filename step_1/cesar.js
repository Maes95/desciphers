var fs = require('fs');

function start(){
  if(!process.argv[2] || !process.argv[3]){
    console.error("Uso: node cesar.js mi_archivo salto");
    return;
  }
  fs.readFile(process.argv[2], 'utf8', function(err, data) {
      if( err ){
          console.error(err.toString());
      }else{
          console.log(desencriptar(data, Number(process.argv[3])));
      }
  });
}

function desencriptar(texto, salto){
  var alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var texto_descifrado = "";
  for(var i = 0; i < texto.length; i++){
    var index = alfabeto.indexOf(texto[i]);
    if(index != -1){
      if(salto <= index){
        texto_descifrado += alfabeto[index - salto]
      }
    }else if(texto[i] == " "){
      texto_descifrado += " ";
    }
  }
  return texto_descifrado;
}

start();

module.exports = desencriptar;
