# web-dev-exercises
HTML/CSS/JavaScript/ReactJS practice exercises
## Exercises for lecture #7 Графічні формати

1. В середині exercises створіть піддиректорію lecture-07. В середині lecture-07 створіть файли index.html та README.md. Відредагуйте файл index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <style>
    </style>
</head>

<body class="body">
    
    <h1>Gradient Text Glow</h1>

    <div class="percents">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis cum magnam quae adipisci minima illum porro eius ipsa rem. Sequi eaque facere necessitatibus fugiat rerum facilis reprehenderit numquam dignissimos itaque!
    </div>

    <div class="negative">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis cum magnam quae adipisci minima illum porro eius ipsa rem. Sequi eaque facere necessitatibus fugiat rerum facilis reprehenderit numquam dignissimos itaque!
    </div>

    <div class="radial">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis cum magnam quae adipisci minima illum porro eius ipsa rem. Sequi eaque facere necessitatibus fugiat rerum facilis reprehenderit numquam dignissimos itaque!
    </div>
</body>
</html>
```
    - Встановити background для класу negative як лінійний градієнт, що направлений вліво та має такі точки зупинки: -50%, -10%, 0%, 100%, 150%. Для кожної точки зупинки встановити колір, що змінюється від світло-синього до темно-синього. 
    - Встановити background для класу percents як лінійний градієнт, що направлений вниз та має такі точки зупинки: 2em, 4em, 8em, 16em, 32em, 64em, 128em. Для кожної точки зупинки встановити колір, що змінюється від світло-зеленого до темно-зеленого. 
    - Встановити background для класу radial два радіальних градієнта з типом ellipse, перший з яких містить 2 кольори - помаранчевий та прозорий і направлений вверх, а другий містить 2 кольори - червоний та прозорий і направлений вниз. 

2. Створити svg-прямокутник розміром 100х100 з координатами 20,20 20, 20. Для обрамлення встановити колір #1c87c9 та товщину лінії 4. Встановити фон прямокутника lightgray.
3. Створити svg-коло розміром 200х200 радіусом = 60 та центром з координатами 100, 70. Для обрамлення встановити червоний колір та товщину лінії 4. Встановити фон кола lightgray.
4. Створити svg-малюнок годинника, що показує час = 3 години
5. Створити svg-малюнок зірки (необов'язкове завдання)
## LICENSE
This repository follows the [MIT License](https://github.com/janusnic/web-dev-exercises-with-solutions/tree/main/LICENSE).
