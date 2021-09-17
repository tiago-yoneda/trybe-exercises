import json
import random

with open("pokemons.json", "r") as raw_data:
    pokemon_data = json.load(raw_data)["results"]
    pokemon_names = [pokemon["name"] for pokemon in pokemon_data]


def chose_pokemon(pokemon_list):
    return random.choice(pokemon_list)


def guessing_round(pokemon_name):
    tentativa = 0
    while tentativa < len(pokemon_name):
        guess = input('Digite o seu palpite: ')
        tentativa += 1
        if guess == pokemon_name:
            print('Parabens você acertou!!!')
            break
        else:
            for index in range(tentativa):
                print(pokemon_name[index], end='')
            print()
    print(f'Fim de jogo, o nome do pokémon é {pokemon_name}')


if __name__ == '__main__':
    chosen_pokemon = chose_pokemon(pokemon_names)
    print(f'O nome do pokémon sorteado tem {len(chosen_pokemon)} letras')
    guessing_round(chosen_pokemon)
