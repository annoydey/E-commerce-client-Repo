import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layouts/Main';
import About from './Components/About/About';
import Inventory from './Components/Inventory/Inventory';
import Order from './Components/Orders/Order';
import Shop from './Components/Shop/Shop';
import { productsAndCartLoader } from './Loaders/productsAndCartLoader';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import PrivateRoute from './routes/PrivateRoute';
import Shipping from './Components/Shipping/Shipping';

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: productsAndCartLoader,
          element: <Order></Order> 
        },
        {
          path: '/shipping',
          loader: productsAndCartLoader,
          element: <PrivateRoute><Shipping></Shipping></PrivateRoute> 
        },
        {
          path:'/inventory',
          element: <PrivateRoute><Inventory></Inventory></PrivateRoute> 
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        },
        {
          path:'/about',
          element: <About></About>
        }
      ]
    },
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;