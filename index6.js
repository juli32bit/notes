const cardapio = [
    { id: 1, nome: "Hamburguer", preco: 15.0, disponivel: true },
    { id: 2, nome: "Refrigerante", preco: 5.0, disponivel: true },
    { id: 3, nome: "Batata Frita", preco: 8.0, disponivel: false },
    { id: 4, nome: "Milkshake", preco: 12.0, disponivel: true },
];

const pedidos = [
    { cliente: "Ana", itens: [1, 2] },
    { cliente: "Carlos", itens: [1, 3] },
    { cliente: "Julia", itens: [4] },
    { cliente: "Marcos", itens: [5] },
];

function buscarProdutoPorId(id) {
    return cardapio.find(item => item.id === id);
}

function calcularValorPedido(itens) {
    let total = 0;

    for (let i = 0; i < itens.length; i++) {
        const produto = buscarProdutoPorId(itens[i]);
        if (produto && produto.disponivel) {
            total += produto.preco;
        } else {
            return null; // pedido inválido
        }
    }

    return total;
}

function gerarRelatorioPedidos(pedidos) {
    return pedidos
        .map(pedido => {
            const total = calcularValorPedido(pedido.itens);
            if (total !== null) {
                return {
                    cliente: pedido.cliente,
                    total: total
                };
            }
            return null;
        })
        .filter(pedido => pedido !== null);
}

const relatorio = gerarRelatorioPedidos(pedidos);
console.log("Pedidos válidos:", relatorio);
