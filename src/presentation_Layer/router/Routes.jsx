import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import HomeBody from '../components/home/HomeBody';

export const routes = createBrowserRouter([
  { path: '/', element: <Home />, children: [{ index: true, element: <HomeBody /> }] },
]);
