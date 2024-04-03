# web-dev-exercises

HTML/CSS/JavaScript/ReactJS practice exercises

## Exercises for lecture №29 - Обробка помилок

В середині exercises помістіть копію директорії lecture-29. 

Створити клас AuthException, розширивши клас Error.
В методі constructor(code, message) визначити властивість this.message, що дорівнює code: message або code, якщо message не передано як аргумент.

```js
class AuthException extends Error {
  constructor(code, message) {
    this.message 
  }
  
  toString() {
    return this.message;
  }
}
```

Створіть змінну checkAuth, яка дорівнює результату пошуку селектора з класом check-auth у файлі index.html.

За допомогою addEventListener, виконайте обробку події click на змінній checkAuth. Функція зворотного зв'язку обробки цієї події повинна запускати блок try { } catch(e) {}. 

У блоці try { } потрібно перевіряти результат, що повертає функція isAuth(). Якщо результат повернення дорівнює false, за допомогою оператора throw викинути виняток AuthException('FORBIDDEN', 'You don\'t have access to this page'). 

У блоці catch() перехопити цей виняток та передати сформоване повідомлення про помилку у діалог dialogBoxId, відобразивши його у параграфі з класом ="message".

Якщо результат повернення функції isAuth() дорівнює true, за допомогою метода window.open відкрити сторінку success.html.

