const readline = require('readline');

// Cria uma interface para entrada e saída
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Questão 1: Calculadora Básica
function calcular(num1, num2, operacao) {
    // Verifica qual operação foi selecionada e executa a correspondente
    switch (operacao) {
        case 'adicao':
            return num1 + num2; // Soma os dois números
        case 'subtracao':
            return num1 - num2; // Subtrai o segundo número do primeiro
        case 'multiplicacao':
            return num1 * num2; // Multiplica os dois números
        case 'divisao':
            if (num2 !== 0) { // Verifica se o divisor não é zero para evitar erro
                return num1 / num2; // Divide o primeiro número pelo segundo
            } else {
                return 'Erro: divisão por zero não é permitida'; // Mensagem de erro para divisão por zero
            }
        default:
            return 'Erro: operação inválida'; // Mensagem de erro para operação desconhecida
    }
}

// Solicita ao usuário os números e a operação desejada
rl.question('Digite o primeiro número: ', (input1) => {
    const numero1 = parseFloat(input1);

    rl.question('Digite o segundo número: ', (input2) => {
        const numero2 = parseFloat(input2);

        rl.question('Digite a operação desejada (adicao, subtracao, multiplicacao, divisao): ', (operacaoEscolhida) => {
            const resultado = calcular(numero1, numero2, operacaoEscolhida); // Executa a operação
            console.log('O resultado é: ' + resultado); // Exibe o resultado
            rl.close(); // Fecha a interface de entrada
        });
    });
});

// Questão 2: Verificar Número Primo
function ehPrimo(numero) {
    if (numero < 2) { // Verifica se o número é menor que 2
        return false; // Números menores que 2 não são primos
    }

    // Verifica se o número é divisível por algum número entre 2 e ele mesmo
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false; // Se divisível, não é primo
        }
    }
    return true; // Se não for divisível por nenhum, é primo
}

rl.question('Digite um número inteiro: ', (input) => {
    const numeroUsuario = parseInt(input);
    const resultado = ehPrimo(numeroUsuario); // Verifica se o número é primo

    // Exibe o resultado ao usuário
    if (resultado) {
        console.log(numeroUsuario + ' é um número primo.');
    } else {
        console.log(numeroUsuario + ' não é um número primo.');
    }
    rl.close(); // Fecha a interface de entrada
});

// Questão 3: Contar Caracteres Especiais
function contarCaracteresEspeciais(str) {
    // Inicializa um objeto para armazenar a contagem de caracteres especiais
    let contagem = {
        '@': 0,
        '#': 0,
        '$': 0,
        '%': 0,
        '&': 0
    };

    // Percorre cada caractere na string
    for (let i = 0; i < str.length; i++) {
        let caractere = str[i];

        // Verifica se o caractere atual é um dos especiais
        if (contagem.hasOwnProperty(caractere)) {
            contagem[caractere]++; // Incrementa a contagem do caractere especial encontrado
        }
    }

    return contagem; // Retorna o objeto com as contagens de caracteres
}

rl.question('Digite uma string: ', (stringUsuario) => {
    const resultado = contarCaracteresEspeciais(stringUsuario); // Conta os caracteres especiais na string

    // Exibe a contagem de cada caractere especial
    console.log(`Contagem dos caracteres especiais:
    @ : ${resultado['@']}
    # : ${resultado['#']}
    $ : ${resultado['$']}
    % : ${resultado['%']}
    & : ${resultado['&']}`);
    rl.close(); // Fecha a interface de entrada
});

// Questão 4: Calcular Média de Notas
function calcularMedia(notas) {
    let soma = 0;

    // Soma todas as notas fornecidas
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }

    // Retorna a média das notas
    return soma / notas.length;
}

let notas = []; // Array para armazenar as notas

// Solicita as 4 notas ao usuário
rl.question('Digite a nota da prova 1: ', (input1) => {
    notas.push(parseFloat(input1));

    rl.question('Digite a nota da prova 2: ', (input2) => {
        notas.push(parseFloat(input2));

        rl.question('Digite a nota da prova 3: ', (input3) => {
            notas.push(parseFloat(input3));

            rl.question('Digite a nota da prova 4: ', (input4) => {
                notas.push(parseFloat(input4));

                const media = calcularMedia(notas); // Calcula a média das notas

                // Determina o status do aluno com base na média
                let status;
                if (media >= 7) {
                    status = 'Aprovado';
                } else if (media >= 5 && media < 7) {
                    status = 'Recuperação';
                } else {
                    status = 'Reprovado';
                }

                // Exibe o resultado ao usuário
                console.log(`Média: ${media.toFixed(2)}\nStatus: ${status}`);
                rl.close(); // Fecha a interface de entrada
            });
        });
    });
});

// Questão 5: Jogo de Adivinhação
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1; // Gera um número aleatório entre 1 e 100
}

const numeroSecreto = gerarNumeroAleatorio(); // Gera o número secreto
let tentativas = 0;

function perguntarTentativa() {
    rl.question('Tente adivinhar o número (entre 1 e 100): ', (input) => {
        const tentativa = parseInt(input);
        tentativas++;

        // Fornece uma dica ao usuário
        if (tentativa < numeroSecreto) {
            console.log('O número secreto é maior.');
            perguntarTentativa(); // Continua pedindo tentativas
        } else if (tentativa > numeroSecreto) {
            console.log('O número secreto é menor.');
            perguntarTentativa(); // Continua pedindo tentativas
        } else {
            console.log(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativas.`);
            rl.close(); // Fecha a interface de entrada
        }
    });
}

perguntarTentativa(); // Inicia o jogo de adivinhação