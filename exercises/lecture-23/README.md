# web-dev-exercises
HTML/CSS/JavaScript/ReactJS practice exercises
## Exercises for lecture №23 - Події JavaScript


В середині exercises створіть піддиректорію lecture-23. В середині lecture-23 створіть файли index.html, app.css та app.js

## Маємо index.html:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lecture 22 | Об’єктна модель документа</title>
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="app.css">
</head>
<body>
<div class="container text-center mt-5">
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>

    <div class="alert mt-5" role="alert">
        
    </div>
      
</div>


<div class="row catalog">
    <div class="col-sm-6 col-md-4 col-xl-3 mb-3 mb-sm-0">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Special title 1 treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary add-to-cart">Add to cart</a>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-4 col-xl-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Special title 2 treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary add-to-cart">Add to cart</a>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-4 col-xl-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title 3 treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary add-to-cart">Add to cart</a>
          </div>
        </div>
    </div>

    <div class="col-sm-6 col-md-4 col-xl-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title 4 treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary add-to-cart">Add to cart</a>
          </div>
        </div>
    </div>

    <div class="col-sm-6 col-md-4 col-xl-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title 5 treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary add-to-cart">Add to cart</a>
          </div>
        </div>
    </div>
    <div class="col-sm-6 col-md-4 col-xl-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title 6 treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" class="btn btn-primary add-to-cart">Add to cart</a>
          </div>
        </div>
    </div>
</div>

<dialog>
    <div class="modal-dialog">
        <div class="modal-content">
           <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
            </div>
            <div class="modal-body">
                <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary close" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</dialog>

<script src="app.js"></script>
</body>
</html>

```

## Маємо app.css:
```css
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');


body {
    background-color: white;
    color: black;
  }
  
.dark-mode {
    background-color: black;
    color: white;
}

.hide {
    display: none;
}
```

## Маємо app.js:
```js
const alert = document.querySelector('.alert');

```


1. Знайти на сторінці кнопку з класом btn-primary. Призначте знайденому елементу подію onclick. Написати функцію обробки події onclick, що додає CSS-клас alert-primary до елемента з id = alert та змінює значення властивості textContent цього елемента на "A simple primary alert—check it out!".

2. Знайти на сторінці кнопку з класом btn-secondary. Додати до кнопки прослуховувач події "click". Написати функцію обробки події click, що додає CSS-клас alert-primary до елемента з id = alert та змінює значення властивості textContent цього елемента на "A simple secondary alert—check it out!"

3. Знайти на сторінці кнопку з класом btn-success. Додати до кнопки прослуховувач події "mouseover". Написати функцію обробки події mouseover, що додає CSS-клас alert-success до елемента з id = alert та змінює значення властивості textContent цього елемента на "A simple success alert—check it out!"

Додати до кнопки прослуховувач події "mouseout". Написати функцію обробки події mouseout, що видаляє CSS-клас alert-success з елемента alert та змінює значення властивості textContent цього елемента на пустий рядок.

4. Знайти на сторінці кнопку з класом btn-danger. Додати до кнопки прослуховувач події "focus". Написати функцію обробки події focus, що додає CSS-клас alert-danger до елемента з id = alert та змінює значення властивості textContent цього елемента на "A simple danger alert—check it out!"
Додати до кнопки прослуховувач події "focusout". Написати функцію обробки події focusout, що видаляє CSS-клас alert-danger з елемента alert та змінює значення властивості textContent цього елемента на пустий рядок.


5. Знайти на сторінці кнопки з класом btn-dark та btn-light. 
Написати функцію toggleMode, що перемикає клас «dark-mode» елемента document.body за допомогою методу classList.toggle(). Одночасно при перемиканні класу dark-mode потрібно приховувати або показувати відповідну кнопку. Якщо ввімкнено режим dark-mode, показати кнопку btn-light та сховати кнопку dark-mode, і навпаки, якщо вимкнено режим  dark-mode, показати кнопку btn-dark та сховати кнопку btn-light  


6. Знайти на сторінці кнопку з класом btn-info. Додати до кнопки прослуховувач події "keypress". Написати функцію обробки події keypress, що перевіряє, чи є натиснута клавіша, клавішею "Enter". Якщо це так, типову дію події потрібно скасовувати за допомогою методу event.preventDefault(). Після скасування дії за замовчуванням, додати CSS-клас alert-info до елемента з id = alert та змінити значення властивості textContent цього елемента на "A simple info alert—check it out!";


7. Знайти на сторінці всі селектори .card. Використовуючи цмкл for, вивести на консоль вміст кожного елемента з класом .card-title

8. Знайти на сторінці всі селектори .card. Використовуючи цмкл for, знайти для кожного елемента .card кнопку з класом .add-to-cart, додати для кожної кнопки обробник події click, що викликає функцію, яка виводить на консоль вміст кожного елемента з класом .card-title

