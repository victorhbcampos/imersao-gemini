function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById('resultados-pesquisa')
  
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = ""
  
    // Itera sobre cada item de dados e constrói o HTML para cada resultado
    for (let dado of dados) {
      // Cria um novo elemento de resultado com as informações do dado atual
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.nome}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `
    }
  
    // Atualiza o conteúdo da seção HTML com os resultados construídos
    section.innerHTML = resultados
  }