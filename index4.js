//O que a função contarMaioresDeIdade faz, passo a passo?
function contarMaioresDeIdade(pessoas) { //O parâmetro pessoas serve para para se referir a cada objeto dentro do grupo pessoas. esses objetos são um array de arrays.
    let total = 0;
    //Variável total inicializada com 0
    for (let i = 0; i < pessoas.length; i++) {
        //Para i = 0, enquanto i for menor que o tamanho do array pessoas, i será iterado com +1.

        //O que pessoas[i].idade representa?
        if (pessoas[i].idade >= 18) {
            //Se o número dentro de pessoas for maior ou igual a 18, total ++
            //Se pessoas [i].idade for maior ou igual a dezoito, total será iterado a +1
            total++;
                //A variável total serve para contabilizar quantas pessoas num grupo de maiores de idade tem 18 anos.
        }
    }

    return total;
    //isso vai retornar o valor total ao percorrer o grupo pessoas
}

let grupo = [
    { nome: "Ana", idade: 17 },
    { nome: "Carlos", idade: 22 },
    { nome: "Julia", idade: 18 },
    { nome: "Miguel", idade: 15 }
];

let resultado = contarMaioresDeIdade(grupo);
//Qual será o valor final da variável resultado e por quê?

//2, porque há dois maiores de idade no array de arrays da variável grupo.
console.log("Total de maiores de idade:", resultado);


//O que será exibido no console.log?
//2