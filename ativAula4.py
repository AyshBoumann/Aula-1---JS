# Programa de contagem regressiva
time = 10  # define a variável time

while time >= 1:
    # enquanto time for maior ou igual a 1
    print(time)  # exibe o valor de time
    time -= 1  # reduz o valor de time

# após o loop, exibe a mensagem de Ano Novo
print("Feliz Ano Novo!")


# Soma dos números pares de 1 a 20
soma = 0  # Inicializa a variável para armazenar a soma

for num in range(1, 21): # Itera sobre os números de 1 a 20
    if num % 2 == 0:  # verifica se o número é par
        soma += num  # adiciona o número à soma

print(f'A soma dos números pares de 1 a 20 é: {soma}')


# Tabuada do número 7
numero_tabuada = 7  # define o número para a tabuada

for i in range(1, 11):
    # itera sobre os números de 1 até 10
    print(f'{numero_tabuada} x {i} = {numero_tabuada * i}')  # calcula e exibe o produto do número da tabuada com i


# Contagem de vogais em uma palavra
vogais = ["a", "e", "i", "o", "u"]  # lista de vogais
palavra = "programador"  # palavra para analisar

contagem = 0  # inicializa o contador de vogais

for letra in palavra:
    # verifica cada letra da palavra
    if letra in vogais:
        # se a letra estiver na lista de vogais, incrementa o contador
        contagem += 1

print(f'A palavra "{palavra}" tem {contagem} vogais.')  # mostra o número total de vogais na palavra


# Contagem de números ímpares de 1 a 20
contagem = 1  # inicia a variável de contagem

while contagem <= 20:
    # enquanto a contagem for menor ou igual a 20
    if contagem % 2 != 0:
        # se a contagem for um número ímpar
        print(f'Número ímpar: {contagem}')  # exibe o número ímpar
    contagem += 1  # incrementa a contagem


# Soma dos dígitos de um número inteiro
numero = 1234  # número inteiro para calcular a soma dos dígitos

soma = 0  # inicializa a variável para armazenar a soma dos dígitos


# Converte o número para uma string para iterar sobre cada caractere
numero_string = str(numero)

for caractere in numero_string:
    # itera sobre cada caractere na representação em string do número
    soma += int(caractere)  # converte o caractere para inteiro e adiciona à soma

print(f'A soma dos dígitos do número {numero} é: {soma}')  # exibe o resultado


# Propriedades de um Objeto
pessoa = { # define um dicionário pessoa com atributos
    "nome": "Alice Souza",  # nome da pessoa
    "idade": 25, # idade
    "endereco": { # endereco
        "rua": "Avenida das Flores", # nome da rua
        "numero": 456, # numero da casa
        "cidade": "Jardim das Estrelas", # cidade
    },
}

# Formatação manual para exibir 
print(f"Nome: {pessoa['nome']}") 
print(f"Idade: {pessoa['idade']}")
print(f"Endereço: {pessoa['endereco']['rua']}, {pessoa['endereco']['numero']}, {pessoa['endereco']['cidade']}")