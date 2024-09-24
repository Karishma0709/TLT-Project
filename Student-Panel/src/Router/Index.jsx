import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Sidebar from '../Components/Sidebar';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Sidebar />,
      },
    ],
  },
]);
