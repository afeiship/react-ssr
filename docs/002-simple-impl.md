# Simple Implemnts:
> 简单的实现原理分析.

## Base layout html:

## Client:
```jsx
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = () => <div>Home</div>;
const Hello = () => <div>Hello</div>;

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/hello" component={Hello} />
    </Router>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'))
```

## Server:
```jsx
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
router.get('*', async (ctx) => {
  ctx.body = `
     <!DOCTYPE html>
       <html lang="en">
       <head>
         <meta charset="UTF-8">
         <title>React SSR</title>
       </head>
       <body>
         <div id="app"></div>
         <script type="text/javascript" src="/bundle.js"></script>
       </body>
     </html>
   `;
});

app.use(router.routes());
app.listen(3000, '0.0.0.0');
```

## Route:
```jsx
```


## resources:
+ https://juejin.im/post/5b0269c2518825428b3916f9
+ https://segmentfault.com/a/1190000008255221