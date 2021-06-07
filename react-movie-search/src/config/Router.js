import Home from '../pages/Home';
import Favorite from '../pages/Favorite';
import Detail from '../pages/Detail';

export const routes = [
  {
    path: '/',
    exact: true,
    component: <Home />,
    title: 'Home',
    isHeaderElement: true,
  },
  {
    path: '/movies/:id',
    exact: true,
    component: <Detail />,
    title: 'Detail',
    isHeaderElement: false,
  },
  {
    path: '/favorite',
    exact: true,
    component: <Favorite />,
    title: 'Favorite',
    isHeaderElement: true,
  },
];
