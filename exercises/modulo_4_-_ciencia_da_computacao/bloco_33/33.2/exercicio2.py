import random

# Exercício 2: Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa
# usuária tenha que adivinhar uma palavra que será mostrada com as letras
#  embaralhadas. O programa terá uma lista de palavras e escolherá uma
# aleatoriamente. O jogador terá três tentativas para adivinhar a palavra.
# Ao final a palavra deve ser mostrada na tela, informando se a pessoa ganhou
# ou perdeu o jogo.
word_list = [
    "abacaxi",
    "abobrinha",
    "amendoas",
    "arara",
    "avestruz",
    "bicicleta",
    "cacatua",
    "cachorro",
    "camisa",
    "carangueho",
    "carpa",
    "cebola",
    "cometa",
    "corvo",
    "faisao",
    "flor",
    "forquilha",
    "graviola",
    "lamente",
    "laranja",
    "lesma",
    "macarrao",
    "maracuja",
    "mochila",
    "mola",
    "ovo",
    "pinguim",
    "pulso",
    "trigo",
    "vaca",
]
MAX_GUESS_COUNT = 3


def select_word(word_list):
    chosen_word = random.choice(word_list)
    scrambled_word = "".join(random.sample(chosen_word, len(chosen_word)))
    return (chosen_word, scrambled_word)


def take_guesses(max_guess):
    guess_list = []
    for index in range(max_guess):
        guess_word = input("Adivinhe a palavra: ")
        guess_list.append(guess_word)
    return (guess_list)


def check_answer(guess_list, chosen_word):
    return chosen_word in guess_list


if __name__ == '__main__':
    chosen_word, scrambled_word = select_word(word_list)
    print(f'A palavra selecionada é: {scrambled_word}')
    guess_list = take_guesses(MAX_GUESS_COUNT)
    if (check_answer(guess_list, chosen_word)):
        print('\nParabéns você acertou!!')
    else:
        print(f'\nQue pena, tente novamente. A palavra era "{chosen_word}"')

