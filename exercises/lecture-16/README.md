# web-dev-exercises
HTML/CSS/JavaScript/ReactJS practice exercises
## Exercises for lecture №16 - JavaScript

1. В середині exercises створіть піддиректорію lecture-16. В середині lecture-16 створіть файл index.html

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
    <h1>Hello, javascript!</h1>

    <script>

    </script>

</body>
</html>

```

  - В середині script визначте 2 змінні message1 зі значенням Hello та message2 зі значенням JavaScript. Використовуючи ці змінні та alert, виконайте відображення рядка "Hello JavaScript!".  

2. Виправити помилку у коді

```html
    <script>
      'use strict';
      
      message = hello;
      message = 123456;

    </script>
```

3. Напишіть програму, що запитує у користувача значення двох змінних x, y, та виводить їх суму

4. Виправити помилку у коді

```html
  <script>
    'use strict';

    let a = 9007199254740991;
    let b = 9007199254740991n;
    console.log(a + b); 
    // Uncaught TypeError: can't convert BigInt to number
  </script>
```

5. Перепишіть код так, щоб результат дорівнював 5

```html
  <script>
    'use strict';

    let apples = "2";
    let oranges = "3";

    alert( apples + oranges ); 
   
  </script>
```

6. Які кінцеві значення всіх змінних a, b, c і d після виконання наведеного нижче коду?

```html
  <script>
    'use strict';

    let a = 1, b = 1;
    let c = ++a; // ?
    let d = b++; // ?

   
  </script>
```


7. Які значення a і x після виконання наведеного нижче коду?

```html
  <script>
    'use strict';

    let a = 2;
    let x = 1 + (a *= 2);
  </script>
```

8. Які результати цих виразів?

```html
  <script>
    'use strict';

    "" + 1 + 0
    "" - 1 + 0
    true + false
    6 / "3"
    "2" * "3"
    4 + 5 + "px"
    "$" + 4 + 5
    "4" - 2
    "4px" - 2
    "  -9  " + 5
    "  -9  " - 5
    null + 1
    undefined + 1
    NaN + 1
  </script>
```

9. Маємо такий код

```html
  <script>
    'use strict';
    // скоротити цей код за допомогою операторів += і *=:
    let n = 2;
    n = n + 5;
    n = n * 2;

  </script>
```

10. Маємо такий код

```html
<script>
      let n1 = "   123   ";
      let n2 = "123z";
      let n3 = true;
      let n4 = false;
      
      console.log(n1, n2, n3, n4);
      // Перетворити змінні n1, n2, n3, n4 на числа 
</script>
```
