import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../Pages/Login';
import SignUp from '../Pages/SingUp';
import Sidebar from '../components/Sidebar';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Login />,
      },
      {
        path: 'SignUp',
        element: <SignUp />,
      },
      {
        path: 'Sidebar',
        element: <Sidebar />,
      },
    ],
  },
]);
