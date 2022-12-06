// Desafio 11 - Crie a função generatePhoneNumber

const generatePhoneNumber = (array) => {

  if (array.length != 11) {
    return 'Array com tamanho incorreto.';
  }

  const count = {};

  for (num of array) {
    !count[num] ? count[num] = 1 : count[num] += 1;
    if (num < 0 || num > 9 || count[num] >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let phoneNumber = `(${array[0]}${array[1]}) `;

  for (let index = 2; index <= 6; index += 1) {
    phoneNumber += array[index];
  }

  phoneNumber += '-';

  for (let index = 7; index <= 10; index += 1) {
    phoneNumber += array[index];
  }

  return phoneNumber;
}

/* Nota : Aprendi uma boa prática ao contar elementos de uma array, que é criando um objeto e armazenando a quantidade de vezes que cada
elemento aparece. */

// Desafio 12 -  Crie a função triangleCheck

// Desafio 13 - Crie a função hydrate

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => { }),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => { }),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => { }),
};
