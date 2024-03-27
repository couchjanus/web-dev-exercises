# web-dev-exercises
HTML/CSS/JavaScript/ReactJS practice exercises
## Exercises for lecture №26 - Higher-Order Functions

В середині exercises створіть піддиректорію lecture-26. В середині lecture-26 створіть файли index.html та app.js

1. Функція calculate() приймає масив чисел як аргумент і повертає  суму:

```js
function calculate(numbers) {
 let sum = 0;
 for (const number of numbers) {
   sum = sum + number;
 }
 return sum;
}
calculate([1, 2, 4]); // => 7

// sum() - це функція, яка описує операцію додавання. 
function sum(n1, n2) {
   return n1 + n2;
}

// multiply() - це функція, яка описує операцію множення.

function multiply(n1, n2) {
   return n1 * n2;
}

```

Зробити calculate() функцією вищого порядку, змусивши її підтримувати  операцію додавання над масивом чисел та операцію множення над масивом чисел

calculate(operation, initialValue, numbers) приймає перший аргумент - функцію, яка описує операцію, другий аргумент - початкове значення, третій аргумент - масив чисел.

calculate(sum, 0, [1, 2, 4]);      // => 7
calculate(multiply, 1, [1, 2, 4]); // => 8


2. Маємо масив student_names

```js
let student_names = ["Wick", "Malcolm", "Smith"]
```

Застосувати до масиву student_names метод map, щоб отримати на консолі результат у такому вигляді:

name: Wick | index: 0 | array: [ "Wick", "Malcolm", "Smith" ]
name: Malcolm | index: 1 | array: [ "Wick", "Malcolm", "Smith" ]
name: Smith | index: 2 | array: [ "Wick", "Malcolm", "Smith" ]


3. Маємо масив об'єктів students_information, що представляє результати іспитів кожного студента у полі degree:

```js
​let students_information = [
    {"name": "Wick", "degree": 375}, 
    {"name": "Malcolm", "degree": 405}, 
    {"name": "Smith", "degree": 453},
];
```

Максимальна оцінка degree = 600
Розрахувати відсоткове значення отриманої оцінки по кожному студенту, використовуючи метод map, та вивести на консоль отриманий результат у такому вигляді:  

{ name: "Wick", degree: 375, percentage: 62.5 }
{ name: "Malcolm", degree: 405, percentage: 67.5 }
{ name: "Smith", degree: 453, percentage: 75.5 }
​

4. Маємо масив :

```js
[1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]];
```

Використовуючи метод reduce, звести масив до одномірного

```js
[ 1, 2, 3, 10, 11, 12, 21, 22, 23, 31, 32, 33, 34, 41, 42 ] 
```


5. Створити конструктор прототипу масиву upperCase(), що перетворює символи рядка у символи верхнього регістру.

```js
function myFunc() {
    let arr = ["Algorithm", "Data Structure", "Operating System", "html"];
    arr.upperCase();
    console.log(arr);
}

myFunc(); // [ 'ALGORITHM', 'DATA STRUCTURE', 'OPERATING SYSTEM', 'HTML' ]
```
