import { Navigate, useRoutes } from 'react-router-dom';
import FormComponent from './Hiring';
import Home from './Home';
export default function RouteComponent() {
  //   const { token } = useUser();
  const routes = useRoutes([
    {
      path: '/hiring',
      element: <FormComponent />,
    },

    {
      path: '/',
      element: <Home />,
    },
  ]);

  return routes;
}
