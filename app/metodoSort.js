let btnOrdenarPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirLivros(livrosOrdenados)
}