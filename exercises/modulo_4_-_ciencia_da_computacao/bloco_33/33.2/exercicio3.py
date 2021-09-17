import json
import random

with open("lista.json", "r") as raw_data:
    word_list = json.load(raw_data)

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

