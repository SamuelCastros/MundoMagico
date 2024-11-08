// Função para buscar e exibir dados do JSON
fetch('data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao carregar o JSON');
        }
        return response.json();
    })
    .then(data => {
        // Exibindo os dados no elemento com id "conteudo"
        const conteudo = document.getElementById('conteudo');
        conteudo.innerHTML = `
            <p><strong>Nome:</strong> ${data.nome}</p>
            <p><strong>Idade:</strong> ${data.idade}</p>
            <p><strong>Cidade:</strong> ${data.cidade}</p>
        `;
    })
    .catch(error => console.error('Erro:', error));