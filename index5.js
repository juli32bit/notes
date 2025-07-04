//Função para avaliar quais usuários são válidos -> estão ativos e são maiores de idade.
function nomesValidos(lista) {
    return lista
        //Retorna a lista para ser filtrada

    //O que a função filter() está filtrando?
    //A função .filter verifica se cada objeto dentro da variavel está ativo e é maior de 18.
        .filter(pessoa => pessoa.ativo && pessoa.idade >= 18)
        //O que a função map() está transformando?
            //A função map transforma o nome de cada objeto em LETRA MAIUSCULA
        .map(pessoa => pessoa.nome.toUpperCase());

        //Map nesse contexto existe para transformar os dados filtrados em um novo formato (nesse caso, nomes em caixa alta)
}
//O que a função nomesValidos faz, passo a passo?

let usuarios = [
    { nome: "Alice", idade: 22, ativo: true },
    { nome: "Bruno", idade: 17, ativo: true },
    { nome: "Carla", idade: 19, ativo: false },
    { nome: "Daniel", idade: 35, ativo: true },
    { nome: "Eva", idade: 16, ativo: false }
];

let resultado = nomesValidos(usuarios);

//Qual será o valor final da variável resultado e por quê?
//ALICE, DANIEL porque atendem às definições de ativo e maior de idade.
//O que será impresso no console.log?
//Usuários válidos: ALICE, DANIEL
console.log("Usuários válidos:", resultado);



