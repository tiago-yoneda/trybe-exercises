// Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las.

const changeToUpperCase = string => string.toUpperCase();

const returnFirstLetter = string => string[0];

const concatStrings = (string1, string2) => string1 + string2;

module.exports = {changeToUpperCase, returnFirstLetter, concatStrings}