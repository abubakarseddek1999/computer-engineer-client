import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/signUp/SignUp";
import CheckOut from "../pages/CheckOut/CheckOut";
import Bookings from "../pages/Bookings/Bookings";
import PrivetRoute from "./privetRoute";
import NotFound from "../pages/Errorpage/NotFound";
import AllServices from "../pages/All services/AllServices";
import DetailsService from "../pages/DetailsService/DetailsService";
import AddService from "../pages/AddService/AddService";
import ManageService from "../pages/ManageService/ManageService";
import UpdateService from "../pages/UpdatePage/UpdateService";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound></NotFound>,
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
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/checkout/:id',
        element: <PrivetRoute><CheckOut> </CheckOut></PrivetRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/details/:id',
        element: <PrivetRoute><DetailsService></DetailsService></PrivetRoute>,
        // loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/bookings',
        element: <PrivetRoute><Bookings></Bookings></PrivetRoute>
      },
      {
        path: '/addService',
        element: <PrivetRoute><AddService></AddService></PrivetRoute>
      },
      {
        path: '/allservices',
        element: <AllServices></AllServices>

      },
      {
        path: '/manageService',
        element: <PrivetRoute><ManageService></ManageService></PrivetRoute>

      },
      {
        path: '/update/:id',
        element: <PrivetRoute><UpdateService></UpdateService></PrivetRoute>

      }

    ]
  },
]);

export default router;