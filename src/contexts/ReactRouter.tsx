import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '@/pages/Home/Home';

const ReactRouterProvider = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default ReactRouterProvider;
