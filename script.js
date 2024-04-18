// Método Simples
document.title = "Meu Site";
document.body.innerHTML += "<h1 id='titulo'>Bem-vindo à Loja!</h1>";

// Método Complexo
const produto = document.createElement("div");
produto.innerHTML = `
    <h2>Produto em Destaque</h2>
    <h3>Nome: Smartphone XYZ</h3>
    <p>Descrição: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut est vel velit suscipit vehicula.</p>
    <p>Preço: R$ 999,99</p>
    <img src="caminho_para_imagem_do_produto" alt="Imagem do Produto">
`;
document.body.appendChild(produto);
