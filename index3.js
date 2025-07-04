function ehValido(numero) {
     //Função para verificar se um número é válido
    return numero >= 0 && numero <= 100;
    // Retorna numero maior ou igual a 0 e numero menor ou igual a 100. A condição é de que deve atender às duas condições, true and true.
}

function temInvalido(lista) {
    for (let i = 0; i < lista.length; i++) {
        //Para i = 0, enquanto i for menor que o tamanho do array lista que assumirá o valor dos dados depois, i será iterado com +1.
        if (!ehValido(lista[i])) {
            //Se i não for válido (Ou seja, não atender aos requisitos da função ehValido, lista terá o valor inválido porque vai retornar true. ) É esse o output que sairá dessa função caso seja invalidado.
            return true;
        }
    }
    //Caso o for e o if não retornem invalidez, o return false vai agir. Ou seja, a função vai retornar um valor False.
    return false;
}


let dados1 = [10, 55, 99, 100]; 
let dados2 = [50, -4, 30]; 
let dados3 = [10, 200, 70]; 

console.log("dados1 tem inválido?", temInvalido(dados1));
//Retorna False
console.log("dados2 tem inválido?", temInvalido(dados2));
//Retorna true
console.log("dados3 tem inválido?", temInvalido(dados3));
//Retorna true
