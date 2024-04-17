# web-dev-exercises

HTML/CSS/JavaScript/ReactJS practice exercises

## Exercises for lecture №38 - Стилізація компонентів

Створити сторінку src/pages/blog.jsx

Використовуючи хуки useContext, createContext, потрібно створити: 
- контекст BlogContext
- компонент Layout
- компонент Header
- компонент BlogInfo

Підключити до сторінки компонент Posts from '../components/Posts'
Стилізуйте сторінку, використовуючи Tailwind CSS 

Сторінка повинна повертати наступне:

```js
  function Blog() {

  const blogName = "Назва вашого блогу";

  return (
    <BlogContext.Provider value={blogName}>
      <Layout>
        <Posts />
      </Layout>
    </BlogContext.Provider>
  );

}

```
