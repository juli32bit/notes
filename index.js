//Aparentemente, o que a funcao faz é contar as letras A dentro do array lista que é indicado nesse aspecto.

function contarLetrasA(palavras) {
    let total = 0;
 //Total inicializado como 0 porque essa é a variável que vai ditar quantos 'as' existem nas palavras no array lista que vai ser indicado depois do fim da função.
    for (let i = 0; i < palavras.length; i++) {
      //para i = 0, enquanto i for menor que o tamanho do array palavras, i será iterado com +1. esse for serve para percorrer o array.
        let palavra = palavras[i];
          //Essa variável serve para ler palavras como i, como anteriormente foi lido pelo for anterior

        for (let j = 0; j < palavra.length; j++) {
          // sendo j = 0, enquanto j for menor que o tamanho do array palavra, j será iterado com +1.
            if (palavra[j] === 'a') {
              // se a variavel j for igual a a, 
              //total será iterado com +1, ou seja, total terá +1, sendo começado com 0. 
              total++;
            }
        }
    }

    return total;
}

let lista = ["abacate", "banana", "uva"];
let resultado = contarLetrasA(lista);

console.log("Total de letras 'a':", resultado);


//Sua missão:
//O que essa função contarLetrasA faz, passo a passo?
 
//R:

//O que está sendo contado exatamente?

//Qual será o valor final de resultado e por quê?

//O que cada for está percorrendo?