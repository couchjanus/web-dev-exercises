# web-dev-exercises
HTML/CSS/JavaScript/ReactJS practice exercises
## Exercises for lecture №20 - Об'єкти

В середині exercises створіть піддиректорію lecture-20. В середині lecture-20 створіть файли index.html та main.js

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
	 <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

</head>
<body>
    <script src="main.js"></script>
</body>
</html>

```
1. Створити об'єкт person, що має властивості name з типом рядка та age з типом цілого числа. Надати значення цим властивостям. Вивести значення властивостей об'єкту на консоль 

 
2. Змінити тип властивості name з рядка на об'єкт, з ключами  firstName та lastName. Надати значення цим властивостям. Вивести значення властивостей об'єкту на консоль.


3. Створити метод об'єкту bio(), що виводить на консоль ім'я, прізвище та вік person.


4. Створити метод об'єкту introduceSelf, що виводить на консоль Hi! I'm firstName.



5. Створити функцію-шаблон createPerson, що приймає аргумент name та повертає новий об'єкт з властивістю name та методом introduceSelf. Створити за допомогою createPerson 2 екземпляри об'єкта.

6. Створити функцію-конструктор Person, що приймає аргумент name та повертає новий об'єкт з властивістю name та методом introduceSelf. Створити за допомогою Person 2 екземпляри об'єкта mary та tom.

  - визначити, чи містить об'єкт mary властивість під назвою prop.


7. Брудний мартіні – ідеальний коктейль для любителів оливкового. Його можна приготувати на горілці чи джині за таким рецептом.

```
    ingredients:
        6 fluid ounces gin
        1 dash dry vermouth
        1 fluid ounce brine from olive jar
        4 stuffed green olives
```
fluid ounces - одиниця ваги avoirdupois - одна шістнадцята фунта (28.4131 грамів).
Офіційно dash становить приблизно 1 мл, 10 крапель або 1/5 чайної ложки.

Створіть об'єкт DirtyMartini, що має 2 методи english_please() та excuse_my_french()
При виклику методу excuse_my_french(), на консоль виводиться:
```
      ingrédients:  
        170.4786 ml de gin
        1 trait de vermouth sec (0.0351951ml) 
        28.4131 ml de saumure du pot d'olive
        4 olives vertes farcies

```
При виклику методу english_please(), на консоль виводиться:
```
      ingredients:
        6 fluid ounces gin
        1 dash dry vermouth (0.0351951ml) 
        1 fluid ounce brine from olive jar
        4 stuffed green olives

```
