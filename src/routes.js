import Root from './pages/root';
import Home from './pages/home';
import Test from './pages/test';


export default [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/test/',
        component: Test
      }
    ]
  }
];