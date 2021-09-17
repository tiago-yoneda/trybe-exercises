# Exercício 1: Faça um programa que receba um nome e imprima o mesmo na
# vertical em escada invertida
def inverse_vertical_print(nome):
    for number_removed in range(len(nome)):
        for index in range(len(nome) - number_removed):
            print(nome[index], end='')
        print()


if __name__ == '__main__':
    name = input("Por favor digite seu nome: ")
    inverse_vertical_print(name)
