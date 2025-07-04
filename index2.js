

 //Acredito que essa função vai ditar quais números negativos tem em cada lista.
function temNegativo(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        //Sendo i = 0, enquanto i for menor que o tamanho do array de numeros, i será iterado com +1.
        if (numeros[i] < 0) {
            //Se algum valor dentro de numeros for menor que 1, será retornado um "true"
            return true;
        }
    }
    //Esse returne false serve para os valores que não são negativos ficarem fora do que está sendo colocado aqui como negativo.
    return false;
}

let lista1 = [4, 8, 15, 16];
let lista2 = [3, -7, 0, 12];


//O primeiro console.log vai dizer: false
//O segundo console.log vai dizer true, que é a lista que tem valor negativo
console.log("lista1 tem número negativo?", temNegativo(lista1));
console.log("lista2 tem número negativo?", temNegativo(lista2));
