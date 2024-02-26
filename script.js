// Função para calcular o IMC
const imcCalc = () => {
    const nome = document.getElementById('nome');
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    const resultado = document.getElementById('resultado');

    // Verifica se algum dos campos (peso, altura, nome) está vazio
    if (!peso.value || !altura.value || !nome.value) {
        // Exibe uma mensagem de erro na div de resultado
        resultado.textContent = 'Preencha todos os campos';
        // Define o conteúdo do elemento pseudo ::before como vazio
        resultado.dataset.content = '';
        // Retorna para interromper a execução da função, pois não é possível calcular o IMC sem todos os dados
        return;
    }

    // Calcula o IMC usando os valores inseridos nos campos de peso e altura (o + transforma o valor de string para number e o .value indica que é o valor que vai ser retornado e não a tag em si)
    const valorImc = (+peso.value / (+altura.value * +altura.value)).toFixed(1);
    // Define o conteúdo da div de resultado com o nome e o resultado do IMC formatado
    resultado.textContent = `${nome.value} - ${getText(valorImc)}`;
    // Define o conteúdo do elemento pseudo ::before como vazio
    resultado.dataset.content = '';
}

// Adiciona o evento de clique ao botão
const button = document.getElementById('button');
button.addEventListener('click', imcCalc);

// Função para obter o texto do IMC
const getText = (imc) => {
    if (imc > 40) return 'Obesidade grau III';
    if (imc > 35) return 'Obesidade grau II';
    if (imc > 30) return 'Obesidade grau I';
    if (imc > 25) return 'Levemente acima do peso';
    if (imc > 18.5) return 'Peso ideal';
    return 'Abaixo do peso';
}

// Inicia o pulsar do texto AGUARDANDO DADOS ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const resultado = document.getElementById('resultado');
    resultado.dataset.content = 'AGUARDANDO DADOS'; // Define o conteúdo do elemento pseudo ::before
});

// Função para limpar os dados
const limparDados = () => {
    const nome = document.getElementById('nome');
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    const resultado = document.getElementById('resultado');

    // Limpa os valores dos campos de entrada
    nome.value = '';
    peso.value = '';
    altura.value = '';

    // Define o conteúdo da div de resultado como "AGUARDANDO DADOS"
    resultado.textContent = '';
    resultado.dataset.content = 'AGUARDANDO DADOS';
}

// Adiciona o evento de clique ao botão "Limpar Dados"
const botaoLimpar = document.getElementById('limparDados');
botaoLimpar.addEventListener('click', limparDados);