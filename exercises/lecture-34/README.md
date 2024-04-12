# web-dev-exercises

HTML/CSS/JavaScript/ReactJS practice exercises

## Exercises for lecture №34 - Створення компонента React

Створити каталог src/components, де будуть міститись компоненти. 

Створити в каталозі src/components компонент навігаційної панелі - Navbar

Створити в каталозі src/components компонент Footer

Імпортувати у головний компонент src/App.tsx компоненти Navbar та Footer

Розмістити компонент Navbar у верхній частині сторінки

Розмістити компонент Footer у нижній частині сторінки


Маємо такий код

```js
function Profile() {
    return (
      <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
      />
    );
}

function Gallery() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
}

```
Потрібно для кожної з функцій створити компонент у каталозі src/components, імпортувати у головний компонент src/App.tsx компонент Gallery та візуалізувати його на сторінці.
