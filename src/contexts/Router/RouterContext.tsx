import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import Home from '@/pages/Home/Home';

import { ROUTES } from './routes';

const RouterContext = () => {
  const router = createBrowserRouter([
    {
      path: ROUTES.CATCH_ALL,
      element: <Navigate to={ROUTES.HOME} replace />,
    },
    {
      path: ROUTES.HOME,
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RouterContext;
