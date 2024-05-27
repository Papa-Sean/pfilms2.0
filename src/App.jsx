import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  About,
  Games,
  Error,
  HomeLayout,
  Landing,
  Shows,
  Store,
} from './pages';
import { Footer } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'games',
        element: <Games />,
      },
      {
        path: 'shows',
        element: <Shows />,
      },
      {
        path: 'store',
        element: <Store />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
