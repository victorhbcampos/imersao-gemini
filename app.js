function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById('resultados-pesquisa')

    let campoPesquisa = document.getElementById('campo-pesquisa').value

    if (!campoPesquisa) {
        section.innerHTML = "<p class='mensagem-erro'>Informe o nome ou nacionalidade de algum piloto.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = ""
    let nome = ""
    let descricao = ""
  
    // Itera sobre cada item de dados e constrói o HTML para cada resultado
    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            // Cria um novo elemento de resultado com as informações do dado atual
            resultados += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${dado.nome}</a>
              </h2>
              <h3>Títulos: ${dado.titulos}</h3>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
          `
        }

      
    }

    if (!resultados) {
        resultados = "<p class='mensagem-erro'>Nenhum piloto foi encontrado.</p>"
    }
  
    // Atualiza o conteúdo da seção HTML com os resultados construídos
    section.innerHTML = resultados
}