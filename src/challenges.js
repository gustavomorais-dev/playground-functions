// Desafio 1 - Crie a função compareTrue

const compareTrue = (boolean1, boolean2) => (boolean1 && boolean2);

// Desafio 2 - Crie a função splitSentence

const splitSentence = (phrase) => phrase.split(" ");

// Desafio 3 - Crie a função concatName

const concatName = (array) => `${array[array.length - 1]}, ${array[0]}`;

// Desafio 4 - Crie a função footballPoints

const footballPoints = (wins, ties) => (wins * 3 + ties);

// Desafio 5 - Crie a função highestCount

const highestCount = (numbers) => {
  let winner = [0, Number.NEGATIVE_INFINITY]; // [number, repetitions]
  for (let index = 0; index < numbers.length; index += 1) {

    let higher = Number.NEGATIVE_INFINITY;
    for (let index2 = 0; index2 < numbers.length; index2 += 1) {
      numbers[index2] > higher && (higher = numbers[index2]);
    }

    let repetitions = 0;
    for (let index2 = 0; index2 < numbers.length; index2 += 1) {
        numbers[index2] === numbers[index] && (repetitions += 1);
    }

    if (repetitions > winner[1] && higher === numbers[index]) {
      winner = [numbers[index], repetitions];
    }

  }
  return winner[1];
}

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

// Desafio 7 - Crie a função catAndMouse

// Desafio 8 - Crie a função fizzBuzz

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => { }),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => { }),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => { }),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => { }),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => { }),
  concatName: typeof concatName === 'function' ? concatName : (() => { }),
  decode: typeof decode === 'function' ? decode : (() => { }),
  encode: typeof encode === 'function' ? encode : (() => { }),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => { }),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => { }),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => { }),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => { }),
  techList: typeof techList === 'function' ? techList : (() => { }),
};
