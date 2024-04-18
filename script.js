// Método Simples
document.title = "Meu Site";
document.body.innerHTML += "<h1 id='titulo'>Bem-vindo(a) à Loja!</h1>";

// Método Complexo
const produto = document.createElement("div");
produto.innerHTML = `
    <h2>Produto em Destaque</h2>
    <h3>Nome: Smartphone Galaxy A14 LTE 64GB 4GB RAM Tela Infinita de 6.6 Polegadas Dual Chip Samsung</h3>
    <p>Descrição: Smartphone Samsung Galaxy A14, 64GB, 4GB, Processador Octa-Core, Até 2 dias de bateria, Câmera Tripla Traseira de 50MP +5MP + 2MP, Selfie de 13.0 MP, Tela Infinita de 6.6 polegadas 60Hz, Dual Chip.</p>
    <p>Preço: R$ 989,90</p>
    <img src="smartphone_Galaxy_A14_LTE.jpg" alt="Imagem de um Smartphone">
`;
document.body.appendChild(produto);
