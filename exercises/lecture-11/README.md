# web-dev-exercises
HTML/CSS/JavaScript/ReactJS practice exercises
## Exercises for lecture №11 - Модуль Grid

1. В середині exercises створіть піддиректорію lecture-11. В середині lecture-11 створіть файли index.html та README.md. Відредагуйте файл index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>lecture №11 - Модуль Grid</title>

	  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    
    <style>

        main div:nth-of-type(1) {
            background-color: #c9316b;
        }
        main div:nth-of-type(2) {
            background-color: #c9319e;
            grid-column: 2;
        }
        main div:nth-of-type(3) {
            background-color: #c231c9;
        }
        main div:nth-of-type(4) {
            background-color: #8f31c9;
        }
        main div:nth-of-type(5) {
            background-color: #5c31c9;
        }
        main div:nth-of-type(6) {
            background-color: #3138c9;
        }
        main div:nth-of-type(7) {
            background-color: #316bc9;
        }
        main div:nth-of-type(8) {
            background-color: #319ec9;
        }
        main div:nth-of-type(9) {
            background-color: #31c9c2;
        }
        main div:nth-of-type(10) {
            background-color: #31c98f;
        }
        main div:nth-of-type(11) {
            background-color: #31c95c;
        }
        main div:nth-of-type(12) {
            background-color: #38c931;
        }

        main {
            margin: 2vw 0;
        }
            
        main div {
            color: #fff;
            padding: 5vh;
        }
      </style>
</head>
<body>
  <header>
	  <h1>CSS Grid Layout</h1>
  </header>

  <main>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
    <div>12</div>
  </main>

</body>
</html>

```
  - створити grid-контейнер з трьох стовпців шириною 15%, 60%, 25%
  - створити grid-контейнер з трьох рядків висотою 95px 1fr 70px
  - створити grid-контейнер з трьох рядків висотою 90px 300px 1fr і чотирьох стовпців однакової ширини
  - створити grid-контейнер з чотирьох стовпців однакової ширини та розмістити стовпці в центрі контейнера
  - створити grid-контейнер з чотирьох стовпців однакової ширини, що дорівнює 50px та розташуйте стовпці в кінці рядка grid-контейнера
  - створити grid-контейнер з чотирьох стовпців однакової ширини, що дорівнює 50px.
  - розташуйте стовпці, встановивши рівномірну відстань між кожною парою стовпців
  - створити grid-контейнер з чотирьох стовпців однакової ширини, що дорівнює 50px
  - розташуйте стовпці, встановивши однакові відстані для кожної сторони стовпців
  - створити grid-контейнер з чотирьох стовпців однакової ширини, що дорівнює 50px
  - призначте рівномірні відстані до обох кінців grid-контейнера та між стовпцями
  - створити grid-контейнер з 2-х стовпців однакової ширини
  - встановіть вирівнювання за замовчуванням для всіх елементів grid-контейнера
  - створити grid-контейнер з 2-х стовпців однакової ширини
  - встановіть вирівнювання у напрямку до початкового краю grid-контейнера для всіх елементів.
  - створити grid-контейнер з 2-х стовпців однакової ширини
  - встановіть вирівнювання у напрямку центру grid-контейнера для всіх елементів.
=  - створити grid-контейнер з 2-х стовпців однакової ширини
  - встановіть рівномірну відстань між кожною парою рядків grid-контейнера.
  - створити grid-контейнер з 2-х стовпців однакової ширини
  - встановіть рівномірну відстань до обох кінців контейнера сітки та між її рядками.

2. Зробіть копію каталогу layout
    - Створіть сітку з 3-х колонок.
    - Налаштуйте grid-властивості так, щоб header займав 3 колонки, main - 2 колонки, footer - 3 колонки.

3. Зробіть копію каталогу template
    - Налаштуйте grid-властивості так, щоб кожний елемент з класом card мав мінімальну ширину, що дорівнює 100% або var(--min), та максимальну ширину, що дорівнює мінімальній ширині або 1fr. Встановіть автоматичну підгонку стовпчиків. 
