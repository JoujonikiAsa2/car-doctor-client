import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../ErrorPage/ErrorPage";
// import CheckOut from "../Pages/CheckOut/CheckOut";
import NewService from "../Pages/NewService/NewService";
import BookService from "../Pages/BookService/BookService";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/book/:id',
        element: <PrivateRoutes><BookService></BookService></PrivateRoutes>,
        loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`),
      },
      // {
      //   path: '/checkOut/:id',
      //   element: <CheckOut></CheckOut>,
      //   loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`),
      // },
      {
        path: '/bookings',
        element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>,
      },
      {
        path: '/service',
        element: <NewService></NewService>
      }
    ]
  },
]);

export default router