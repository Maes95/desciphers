var fs = require('fs');
const Cesar = require("../api.js").Cesar;

function start(){
  if(!process.argv[2] || !process.argv[3]){
    console.error("Uso: node cesar.js mi_archivo salto");
    return;
  }
  fs.readFile(process.argv[2], 'utf8', function(err, data) {
      if( err ){
          console.error(err.toString());
      }else{
          console.log(Cesar(data, Number(process.argv[3])));
      }
  });
}

start();
