// Programa de contagem regressiva
let tempo = 10; // inicializa a variável tempo

while (tempo > 0) {
    // enquanto tempo for maior que 0
    console.log(tempo); // exibe o valor de tempo
    tempo--; // decrementa o valor de tempo
}

// depois do loop, exibe a mensagem de Ano Novo
console.log("Feliz Ano Novo!");


// Soma dos números pares de 1 a 20
let sominha = 0; // inicializa a variável para a soma

for (let numero = 2; numero <= 20; numero += 2) {
    // itera sobre os números pares de 2 a 20
    sominha += numero; // adiciona o número à soma
}

console.log(`A soma dos números pares de 1 a 20 é: ${sominha}`);


// Tabuada do Número 7
const numeroTabuada = 7; // define o número para a tabuada

for (let contador = 1; contador <= 10; contador++) {
    // itera de 1 a 10
    console.log(`${numeroTabuada} x ${contador} = ${numeroTabuada * contador}`); // exibe o resultado da multiplicação
}


// Contagem de Vogais em uma Palavra
const vogais = ["a", "e", "i", "o", "u"]; // lista de vogais
const palavra = "programador"; // palavra para verificação

let totalVogais = 0; // contador de vogais

for (let caractere of palavra) {
    // itera sobre cada caractere da palavra
    if (vogais.includes(caractere)) {
        // verifica se o caractere é uma vogal
        totalVogais++; // incrementa o contador
    }
}

console.log(`A palavra "${palavra}" contém ${totalVogais} vogais.`); // exibe o resultado


// Contagem de Números Ímpares de 1 a 20
let contador = 1; // inicia o contador

while (contador <= 20) {
    // enquanto o contador for menor ou igual a 20
    if (contador % 2 === 1) {
        // verifica se o número é ímpar
        console.log(`Número ímpar: ${contador}`); // exibe o número ímpar
    }
    contador++; // incrementa o contador
}


// Soma dos Dígitos de um Número Inteiro
const numero = 5678; // número para calcular a soma dos dígitos

let soma = 0; // inicializa a variável soma

const numeroComoString = numero.toString(); // converte o número para string

for (let digito of numeroComoString) {
    // itera sobre cada dígito
    soma += parseInt(digito); // converte o dígito para número e soma
}

console.log(`A soma dos dígitos do número ${numero} é: ${soma}`); // exibe o resultado 


// // Propriedades de um Objeto
let pessoa = { // cria um objeto com detalhes de uma pessoa
    nome: "Carlos Ferreira",  // nome da pessoa
    idade: 35,  // idade
    endereco: {  // endereço completo
        rua: "Rua dos Girassóis",  // nome da rua
        numero: 789,  // número da residência
        cidade: "Vale do Sol",  // nome da cidade
    }
};

// exibe as informações formatadas
console.log(`Nome: ${pessoa.nome}`);
console.log(`Idade: ${pessoa.idade}`);
console.log(`Endereço: ${pessoa.endereco.rua}, ${pessoa.endereco.numero}, ${pessoa.endereco.cidade}`);