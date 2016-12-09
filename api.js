function cesar(texto, salto){
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

function trasponer(texto, n){
  var corte = texto.length / n;
  var j = 0;
  var cadenas = [];
  while(j < texto.length){
    cadenas.push(texto.substr(j,corte));
    j = j + corte;
  }
  return cadenas;
}

function trasponer2(texto, n){
  var cadenas = [];
  for(var i = 0; i < texto.length; i++){
    if(!cadenas[i % n]){
      cadenas[i % n] = "";
    }
    cadenas[i % n] += texto[i];
  }
  return cadenas;
}


function vigenere(texto, clave){
  var texto_descifrado = "";
  var j = 0;
  for(var i = 0; i < texto.length; i++){
    var index = vigenere_alphabet[0].indexOf(texto[i]);
    if(index != -1){
      // FILA DE LA CLAVE
      var clave_index  = vigenere_alphabet[0].indexOf(clave[j % clave.length]);
      // POSICION DE LA LETRA CIFRADA EN LA FILA DE LA CLAVE
      var texto_index  = vigenere_alphabet[clave_index].indexOf(texto[i]);
      // LETRA ORIGINAL
      var letra = vigenere_alphabet[0][texto_index];
      // AÑADIMOS LA LETRA
      texto_descifrado += letra;
      j++;
    }else if(texto[i] == " "){
      texto_descifrado += " ";
    }
  }

  console.log(texto_descifrado);
}


var vigenere_alphabet = [["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"],
                         ["B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","A"],
                         ["C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","A","B"],
                         ["D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","A","B","C"],
                         ["E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","A","B","C","D"],
                         ["F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E"],
                         ["G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"],
                         ["H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G"],
                         ["I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H"],
                         ["J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I"],
                         ["K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J"],
                         ["L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K"],
                         ["M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L"],
                         ["N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M"],
                         ["O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N"],
                         ["P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"],
                         ["Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P"],
                         ["R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q"],
                         ["S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R"],
                         ["T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S"],
                         ["U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T"],
                         ["V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U"],
                         ["W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V"],
                         ["X","Y","Z","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W"],
                         ["Y","Z","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X"],
                         ["Z","0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y"]];

var original = "EL CRIPTOANALISIS ES LA PARTE DE LA CRIPTOLOGIA QUE SE DEDICA AL ESTUDIO DE SISTEMAS CRIPTOGRAFICOS CON EL FIN DE ENCONTRAR DEBILIDADES EN LOS SISTEMAS Y ROMPER SU SEGURIDAD SIN EL CONOCIMIENTO DE INFORMACION SECRETA  EN EL LENGUAJE NO TECNICO  SE CONOCE ESTA PRACTICA COMO ROMPER O FORZAR EL CODIGO  AUNQUE ESTA EXPRESION TIENE UN SIGNIFICADO ESPECIFICO DENTRO DEL ARGOT TECNICO  A LAS PERSONAS QUE SE DEDICAN AL CRIPTOANALISIS SE LES LLAMA CRIPTOANALISTAS"
module.exports.Trasponedor = trasponer;
module.exports.Trasponedor2 = trasponer2;
module.exports.Cesar = cesar;
module.exports.Vigenere = vigenere;
module.exports.Original = original;
