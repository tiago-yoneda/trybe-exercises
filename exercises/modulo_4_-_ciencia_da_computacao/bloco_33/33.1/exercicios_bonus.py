# Exercício 1: Dada uma lista, descubra o menor elemento
def retorna_menor(lista):
    lista.sort()
    return lista[0]


print(retorna_menor([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))


# Exercício 2: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um triângulo retângulo com n asteriscos de base. Por exemplo,
# para n = 5 o triângulo terá 5 asteriscos na base:
def print_triangulo(n):
    for index in range(n):
        print((index + 1) * "*")


print_triangulo(5)


# Exercício 3: Crie uma função que receba um número inteiro N e retorne o
# somatório de todos os números de 1 até N
def retorna_somatorio(n):
    return sum(range(1, n + 1))


print(retorna_somatorio(5))


# Exercício 4: Um posto está vendendo combustíveis com a seguinte tabela de
# descontos:
#   Álcool:
#     - Até 20 litros, desconto de 3% por litro;
#     - Acima de 20 litros, desconto de 5% por litro.
#   Gasolina:
#     - Até 20 litros, desconto de 4% por litro;
#     - Acima de 20 litros, desconto de 6% por litro.
def cobra_combustivel(volume, tipo):
    if type(volume) != 'int':
        return "Quandtidade de litros inválida"

    alcool = (1.9, 3, 5)
    gasolina = (2.5, 4, 6)
    desconto_index = 2 if volume > 20 else 1
    if tipo == "A":
        return f"R${volume * alcool[0] * (1 - alcool[desconto_index] / 100)}"
    elif tipo == "G":
        print(gasolina[desconto_index])
        return (
            f"R${volume * gasolina[0] * (1 - gasolina[desconto_index] / 100)}"
        )
    else:
        return "Tipo de combustível inválido"


print(cobra_combustivel('sd', "G"))
