import './presentation_Layer/styles/root/App.scss';
import { RouterProvider } from 'react-router-dom';
import { routes } from './presentation_Layer/router/Routes';

export default function App() {
  return <RouterProvider router={routes} />;
}
