# web-dev-exercises

HTML/CSS/JavaScript/ReactJS practice exercises

## Exercises for lecture №37 - Вбудовані хуки React.

Перепишіть функціональний компонент Post.tsx, використовуючи хуки useState, useEffect, useContext, createContext.

Потрібно створити контекст PostContext
Потрібно створити компонент Layout
Потрібно створити компонент Header
Потрібно створити компонент PostTitle
Потрібно створити компонент PostMain

Компонент Post повинен повертати наступне:

```js
  return (
      <PostContext.Provider value={post}>
          <Layout>
          </Layout>
      </PostContext.Provider>
    );
```
