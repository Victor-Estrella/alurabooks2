const inserirLivros = document.getElementById('livros')
const elementoValorTotalLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

function exibirLivros(listaLivros) {
  elementoValorTotalLivrosDisponiveis.innerHTML = ''
  inserirLivros.innerHTML = ''
    listaLivros.forEach(livro => {

      let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel' // ? significa se for verdade...; : significar se não for verdade...
        inserirLivros.innerHTML += `
        <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">${livro.titulo}</h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        ` 
    })
}
//toFixed(2) transforma o número maximo de casa decimal em 2