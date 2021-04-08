
var numeros = new Array(3);
var isOk = false;
var auxNumero = "";

for(var i = 0; i < 3; i++){

    while (isOk == false){

        auxNumero = prompt("Insira o número " + (i+1));
        
        if(isNaN(Number(auxNumero)) == true){

            alert("Insira apenas números.");

        } else{

            numeros[i] = Number(auxNumero);
            isOk = true;

        }
    }

    isOk = false;
}

alert(retornaMaiorNumero(numeros));

function retornaMaiorNumero(numerosOrdenar) {
    numerosOrdenar.sort(function(a,b){return b-a;});
    return numerosOrdenar[0];
}
