# web-dev-exercises

HTML/CSS/JavaScript/ReactJS practice exercises

## Exercises for lecture №35 - Стан компонента

Маємо головний компонент src/App.tsx:

```js
// src/App.tsx
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blog from './components/Blog';

function App() {

  let post = {
    id: 1,
    title: "Programming Algorithm",
    content: `The word Algorithm means “a process or set of rules to be followed in calculations or other problem-solving operations”. Therefore Algorithm refers to a set of rules/instructions that step-by-step define how a work is to be executed upon in order to get the expected results.`,
    cover: "/vite.svg",
    likes: 5
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> 
      <Blog post={post} key={post.id} />
    </>
  )
}


export default App
```

Маємо клас компонента src/components/Blog.tsx:

```js
// src/components/Blog.tsx

import React from "react"; 

class Blog extends React.Component {

    constructor(props:any) {
        super(props);
        this.state = { post: props.post };
    }

    render() {
       return(
        <article className='post'>
            <div className='cover-container'>
              <img src={this.props.post.cover} alt={this.props.post.title} />
            </div>
            <div className='post-footer'>
              <h3>{this.props.post.title} {this.props.post.id}</h3>
              <p>{this.props.post.content}</p>
            </div>
        </article>
        );
    }
}
export default Blog;


```

Переписати клас компонента Blog як функціональний компонент.
