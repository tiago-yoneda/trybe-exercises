from math import ceil


# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.
def retorna_maior(a, b):
    return a if a > b else b


a, b = 17, 14

print(f"O maior é {retorna_maior(a, b)} ")


# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
def average(list):
    return sum(list) / len(list)


my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(f"\nA média da lista {my_list} é: {average(my_list)}\n")


# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n
def print_quadrado(n):
    for index in range(n):
        print(n * "*")


print_quadrado(5)


# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome
# com a maior quantidade de caracteres
def retorna_longo(list):
    caracteres = 0
    maior = ""
    for nome in list:
        if len(nome) >= caracteres:
            caracteres = len(nome)
            maior = nome
    print(f"\nO nome mais longo é {maior}")


retorna_longo(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])


# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3
# metros quadrados e que a tinta é vendida em latas de 18 litros, que custam
# R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a
# quantidade de latas de tinta a serem compradas e o preço total a partir do
# tamanho de uma parede(em m²).
# 1L -> 3m²
# 1 lata -> 18L -> R$80 -> 54m²


def consumo_de_tinta(metros_quadrados):
    consumo = ceil(metros_quadrados / 54)
    return (consumo, consumo * 80)


print(consumo_de_tinta(500))


# Exercício 6: Crie uma função que receba os três lado de um triângulo e
#  informe qual o tipo de triângulo formado ou "não é triangulo" , caso não
#  seja possível formar um triângulo.
# podemos usar o list.sort() - que modifica a lista
# ou usar o new_list = sorted(object) que cria uma nova lista
def retorna_triangulo(a, b, c):
    vertices = sorted((a, b, c))
    if vertices[2] >= (vertices[1] + vertices[0]):
        return print("Não é um triangulo válido")
    elif vertices[2] == vertices[1] == vertices[0]:
        return print("Triângulo Equilátero: três lados iguais")
    # elif vertices[2] ** 2 == vertices[1] ** 2 + vertices[0] ** 2:
    #     return print('Trinângulo retângulo: a² = b² + c²')
    elif vertices[2] != vertices[1] != vertices[0]:
        return print("Triângulo Escaleno: três lados diferentes")
    else:
        return print("Triângulo Isósceles: quaisquer dois lados iguais")


retorna_triangulo(50, 30, 30)
