import { useRoutes } from 'react-router-dom';
import HiringFormComponent from './Hiring';
import Home from './Home';
import Register from './Register';
import Fixtures from './Fixtures';
import Results from './Results';
import PointsTable from './PointsTable';
import Login from './Login';
export default function RouteComponent() {
  //   const { token } = useUser();
  const routes = useRoutes([
    {
      path: '/hiring',
      element: <HiringFormComponent />,
    },

    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/points-table',
      element: <PointsTable />,
    },

    {
      path: '/results',
      element: <Results />,
    },
    {
      path: '/fixtures',
      element: <Fixtures />,
    },

    {
      path: '/team-register',
      element: <Register />,
    },
  ]);

  return routes;
}
