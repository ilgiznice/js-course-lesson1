// Объявление переменных
const b = 2;
let c = 3;

//  Типы данных
const number_1 = 1;
const number_2 = 1.5;

const string = 'Привет';

const array_1 = [1, 2, 3];
const array_2 = [number_1, number_2, string];
//  [1, 1.5, 'Привет']

const object = {
  age: 123,
  gender: 'male',
  number: number_1, // 1
  array: array_2, //  [1, 1.5, 'Привет']
};

const variable_1 = undefined;
const variable_2 = NaN;
// 'Привет' / 2 = NaN

//  Объяснение с const/let
object.age = 321; // Можно 
object = []; // Нельзя

const seasons = ['Зима', 'Весна', 'Лето', 'Осень'];

seasons.push('Пятый сезон'); // Можно
seasons = {}; // Нельзя
seasons = 123; // Нельзя

//  Арифметические действия
const is_2 = 1 + 1; // 1 + 1 = 2
const is_1 = is_2 - 1; // 2 - 1 = 1
const is_6 = is_1 * 6; // 1 * 6 = 6
const is_3 = is_6 / 2; // 6 / 2 = 3

const helloWorld = 'Hello' + ' ' + 'world';
//  сonst helloWorld = `Hello world`;
const helloMe = string + ', ' + 'Ильгиз';
//  const helloMe = `${string}, Ильгиз`;

//  Условия
//  ЕСЛИ ТО ИНАЧЕ
const wokeUp = true; // Булево значение (true или false)
//  '1' == 1 ИСТИНА
//  '1' === 1 ЛОЖЬ (Типы данных различаются)
if (wokeUp === true) {
  // Действие, если проснулся
} else {
  //  Действие, если не проснулся
}

if (wokeUp) {
  // Действие, если проснулся
}

if (is_3 === 3) {
  // Число равно трём, сделать действие
} else {
  // Число не равно трём, другое действие
}

if (object.age === 123) {
  // Если возраст равен 123 года
}

if (array_1[0] === 1) {
  // Первый элемент массива равен 1
}

if (array_1[2] === 3) {
  //  Третий элемент массива равен 3
}

if (string === 'Привет') {
  //  Строка string равна "Привет"
}

if (is_2 === 2) {
  //
}

//  0 = ЛОЖЬ
//  Любое другое число = ИСТИНА

//  Циклы
for (let i = 0; i < 10; i++) {
  //
}
//  i++ === i + 1;
//  i-- === i - 1;
//  ++i === i + 1;
//  i += 1 === i + 1;
//  0, 0 < 10 ИСТИНА, Делаем действие, i увел. на 1
//  1, 1 < 10 ИСТИНА, Делаем действие, i увел. на 1
//  2, 3, 4, ..., 9
//  10, 10 < 10 ЛОЖЬ
//  (10, 10 <= 10 ИСТИНА)

for (let i = 0; i < array_1.length; i++) {
  //
}

// let i = 0; i < 3; i++
//  0, 0 < 3 ИСТИНА, Действие, i увел. на 1
//  1
//  2
//  3, 3 < 3 ЛОЖЬ


