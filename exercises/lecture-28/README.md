# web-dev-exercises

HTML/CSS/JavaScript/ReactJS practice exercises

## Exercises for lecture №28 - Forms

В середині exercises створіть піддиректорію lecture-28. В середині lecture-28 створіть файли index.html та app.js

1. Є проста реєстраційна форма з полями для імені користувача, електронної пошти, пароля та кнопки «Надіслати». Існує також контейнер div (errorMessages) для відображення повідомлень про помилки перевірки:

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>User Registration</h2>
    <form id="registrationForm">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <div>
        <input type="submit" value="Register" />
      </div>
    </form>

    <div id="errorMessages"></div>
    <script src="app.js"></script>
  </body>
</html>

```

Написати JavaScript-код для обробки надсилання форми та виконання перевірки на стороні клієнта.

Перевірка форми: потрібно отримати значення імені користувача, електронної пошти та пароля.

Виконати базову перевірку: 
- ім’я користувача не може бути пустим, 
- електронна адреса має бути у правильному форматі, 
- пароль має містити принаймні 8 символів, 
- пароль має містити принаймні одну велику літеру, одну малу літеру, одну цифру та один спеціальний символ.

Обробка помилок: якщо будь-яка перевірка не вдасться, потрібно показати відповідне повідомлення про помилку. Повідомлення про помилки відображаються в розділі errorMessages.

Скидання форми: після успішної реєстрації потрібно скинути значення полів форми.
