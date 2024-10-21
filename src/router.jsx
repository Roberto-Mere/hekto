import { createBrowserRouter } from 'react-router-dom';
import Root from './layout/Root';
import Home from './pages/home/Home';
import Products from './pages/products/Products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: '/products', element: <Products /> },
    ],
  },
]);

export default router;
