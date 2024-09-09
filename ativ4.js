class Colaborador { // Classe para representar os colaboradores de uma empresa fictícia
    constructor(nome, salario) { // Inicializa as propriedades nome e salário
        this.nome = nome;
        this._salario = salario;  // _salario é uma propriedade interna
    }

    funcao() {
        console.log('O colaborador executa suas tarefas.'); // Método padrão para a função de um colaborador genérico
    }

    obterNome() {
        return this.nome; // Retorna o nome do colaborador
    }

    get salario() {
        return this._salario; // Retorna o valor do salário
    }

    set salario(novoSalario) { // Define o valor do salário
        if (novoSalario <= 0) { // Verifica se o salário é menor ou igual a 0
            console.log("Valor inválido para salário!"); // Informa que o salário não pode ser alterado para um valor inválido
        } else {
            this._salario = novoSalario; // Atualiza o salário se o valor for válido
        }
    }
}

class Designer extends Colaborador { // Classe Designer, que herda de Colaborador
    funcao() { // Especifica a função do designer na empresa
        console.log('O designer cria interfaces visuais.');
    }

    novoColaborador() { // Método para indicar uma nova contratação de Designer
        console.log(`${this.nome} é nosso novo designer!`);
    }
}

class Engenheiro extends Colaborador { // Classe Engenheiro, que herda de Colaborador
    funcao() { // Especifica a função do engenheiro na empresa
        console.log('O engenheiro desenvolve sistemas.');
    }

    novoColaborador() { // Método para indicar uma nova contratação de Engenheiro
        console.log(`${this.nome} é nosso novo engenheiro!`);
    }
}

const engenheiroCivil = new Engenheiro('Lucas'); // Cria um novo objeto Engenheiro chamado Lucas
engenheiroCivil.novoColaborador(); // Imprime uma mensagem de contratação para Lucas

const equipe = [ // Array de colaboradores da empresa com seus respectivos nomes e salários
    new Designer('Alberto', 5000),
    new Engenheiro('Solange', 6000),
    new Designer('Carlos', 4500)
];

equipe.forEach(colaborador => { // Itera sobre o array de colaboradores
    console.log(colaborador.obterNome()); // Imprime o nome de cada colaborador
});

equipe.forEach(colaborador => { // Itera novamente sobre o array de colaboradores
    console.log(`Nome: ${colaborador.nome}, Função: ${colaborador.constructor.name}, Salário: ${colaborador.salario}`); // Imprime o nome, função e salário de cada colaborador
});

equipe[0].salario = 0; // Tenta definir o salário do primeiro colaborador como 0
equipe[1].salario = 7000; // Atualiza o salário do segundo colaborador para 7000
console.log(`Novo salário de Alberto: ${equipe[0].salario}`); // Imprime o salário de Alberto, que não foi alterado
console.log(`Novo salário de Solange: ${equipe[1].salario}`); // Imprime o novo salário de Solange