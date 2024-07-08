let livros = []
const endpointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivros()

async function getBuscarLivros() {
    const res = await fetch(endpointApi)
    livros = await res.json()
    let livrosDesconto = aplicarDesconto(livros)
    exibirLivros(livrosDesconto)
}