function aplicarDesconto(livros){
    const desconto = 0.3
    livrosDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)} //pega todo o livro e copia ele com os ..., e altera somente o preco
    })
    return livrosDesconto
}