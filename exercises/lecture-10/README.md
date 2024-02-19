# web-dev-exercises
HTML/CSS/JavaScript/ReactJS practice exercises
## Exercises for lecture №10 - Модуль Flex

1. В середині exercises створіть піддиректорію lecture-10. В середині lecture-10 створіть файли index.html та README.md. Відредагуйте файл index.html

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Document</title>

	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

    <style>
        .wrapper {
            display: flex;
            flex-wrap: wrap;
            width: 700px;
        }

        .item-blue {
            background-color: blue;
        }
        .item-orange {
            background-color:orange;  
        }
        .item-green {
            background-color:green;
        }

        .item {
            color: white;
            width: 100px;
        }
    </style>

</head>
<body>
    <h2>CSS Flex Property</h2>
    <div class="wrapper">
        <div class="item item-blue">CSS</div>
        <div class="item item-orange">Flex</div>
        <div class="item item-green">Property</div>
    </div>
</body>
</html>

```
    - розподілити простір між елементами flex так, щоб вони мали однакову ширину та заповнювали весь доступний простір

    - Встановіть для елемента blue фактор зростання 3
    - Встановіть для елемента green фактор зростання 1
    - Розрахуйте в пікселях ширину кожного з елементів item-green, item-orange, item-blue
```css
        .item-blue {
            background-color: blue;
            flex-grow: 3;
        }
        .item-orange {
            background-color:orange;  
        }
        .item-green {
            background-color:green;
            flex-grow: 1;
        }
```

2. Зробіть копію каталогу navbar
    - Вирівняйте елементи навігаційної панелі по вертикалі так, щоб вони мали однакову відстань зверху та знизу.
    - Вирівняйте елементи навігаційної панелі по горизонті так, щоб Brand Name розташувався зліва, а пункти меню - справа. 


3. Зробіть копію каталогу layout
    - Налаштуйте елементи з класом card так, щоб вони пропорційно ділили між собою весь доступний простір та мали базовий розмір, визначений змінною --min.
